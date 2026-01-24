require('dotenv').config();
const { Webhook }= require('svix');
const User= require('../models/User');


// API controoler Function to manage Clerk User with database

const clerkWebhooks= async (req,res)=>{
    try{
         if (!process.env.CLERK_WEBHOOK_SECRET) {
            console.error('CLERK_WEBHOOK_SECRET is not set');
            return res.status(500).json({success: false, message: "Webhook secret not configured"});
        }

        const whook= new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        const headers= {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        };

        const payload= req.body.toString();  // RAW BUFFER

        const event= whook.verify(payload, headers);

        const { data, type }= event;

        switch(type){
            case 'user.created': {
                console.log('Creating user:', data.id);
                await User.create({
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
                    imageUrl: data.image_url,
                });
                console.log('User created successfully:', newUser._id);
                return res.status(200).json({message: "User created successfully"});
            }
            case 'user.updated': {
                console.log('Updating user:', data.id);
                const userData= {
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
                    imageUrl: data.image_url,
                }
                console.log('User updated successfully:', updatedUser._id);
                await User.findByIdAndUpdate(data.id, userData,{ upsert: true, new: true });
                return res.status(200).json({success: true, message: "User updated successfully"});
            }
            case 'user.deleted': {
                console.log('Deleting user:', data.id);
                await User.findByIdAndDelete(data.id);
                console.log('User deleted successfully');
                return res.status(200).json({success: true, message: "User deleted successfully"});
            }
            default: 
                console.log('Unhandled event type:', type);
                return res.status(200).json({success: true, message: "Event type not handled"});
        }
    }catch(error){
        console.log(error.message);
        return res.status(500).json({success: false, message: error.message});
    }
}

module.exports= {clerkWebhooks};