require('dotenv').config();
const { Webhook }= require('svix');
const User= require('../models/User');


// API controoler Function to manage Clerk User with database

const clerkWebhooks= async (req,res)=>{
    try{
        const whook= new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        const headers= {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        };

        const payload= req.body;  // RAW BUFFER

        const event= whook.verify(payload, headers);

        const { data, type }= event;

        switch(type){
            case 'user.created': {
                await User.create({
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
                    imageUrl: data.image_url,
                });
                return res.status(200).json({message: "User created successfully"});
            }
            case 'user.updated': {
                const userData= {
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
                    imageUrl: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userData,{ upsert: true, new: true });
                return res.status(200).json({success: true, message: "User updated successfully"});
            }
            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                return res.status(200).json({success: true, message: "User deleted successfully"});
            }
            default: 
                return res.status(200).json({success: true, message: "Event type not handled"});
        }
    }catch(error){
        console.log(error.message);
        return res.status(500).json({success: false, message: error.message});
    }
}

module.exports= {clerkWebhooks};