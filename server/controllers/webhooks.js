require('dotenv').config();
const { Webhook }= require('svix');
const User= require('../models/User');


// API controoler Function to manage Clerk User with database

const clerkWebhooks= async (req,res)=>{
    try{
        const whook= new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await whook.verify(JSON.stringify(req.body),{
            id: req.headers['svix-id'],
            timestamp: req.headers['svix-timestamp'],
            signature: req.headers['svix-signature']
        })

        const {data, type}= req.body;

        switch(type){
            case 'user.created': {
                const userData= {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,   
                    imageUrl: data.image_url,
                };
                await User.create(userData);
                console.log("New user created in DB with Clerk ID:", data.id);
                return res.status(200).json({success: true, message:"User created webhook handled"});
            }
            case 'user.updated': {
                const userData= {
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,   
                    imageUrl: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData);
                console.log("New user created in DB with Clerk ID:", data.id);
                return res.status(200).json({success: true, message:"User created webhook handled"});
            }
            case 'user.deleted': {
                await User.findOneAndDelete({_id: data.id});
                return res.status(200).json({success: true, message:"User deleted webhook handled"});
            }
            default: {
                console.log("Unhandled webhook type:", type);
                return res.status(400).json({success: true, message:"Unhandled webhook type"});
            }
        }  
    }catch(error){
        console.log("Clerk Webhook Error:", error.message);
        return res.status(500).json({success: false, message: error.message});  
    }
}

module.exports= {clerkWebhooks};