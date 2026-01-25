require('dotenv').config();
const { Webhook } = require("svix");
const User= require('../models/User');

// API CONTROLLER FUNCTION TO MANAGE CLERK USER WITH DATABASE 

const clerkWebhooks= async (req, res)=>{
    try{
        const whook= new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(req.body, {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-sginature"],
        });

        const {data, type}= req.body;

        switch(type){
            case "user.created":{
                const UserData= {
                    _id: data.id,
                    email: data.email.addresses[0].email_address,
                    firstName: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                }
                await User.create(UserData);
                res.status(200).json({message: "User Created Successfully"});
                break;
            }
            case "user.updated":{
                const UserData= {
                    email: data.email.addresses[0].email_address,
                    firstName: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, UserData);
                res.status(200).json({message: "User Updated Successfully"});
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                res.status(200).json({message: "User Deleted Successfully"});
                break;
            }
            default: {
                res.status(200).json({message: "Event type not handled"});
                break;
            }
        }
    }catch(error){
        return res.status(400).json({message: "Webhook Error", error: error.message});
    }
}

module.exports= {clerkWebhooks};