// require('dotenv').config();
// const { Webhook }= require('svix');
// const User= require('../models/User');


// // API controoler Function to manage Clerk User with database

// const clerkWebhooks= async (req,res)=>{
//     try{
//         const whook= new Webhook(process.env.CLERK_WEBHOOK_SECRET);
//         const event= await whook.verify(JSON.stringify(req.body),{
//             "svix-id": req.headers["svix-id"],
//             "svix-timestamp": req.headers["svix-timestamp"],
//             "svix-signature": req.headers["svix-signature"],
//         })

//         const {data, type}= event;

//         switch(type){
//             case 'user.created': {
//                 const userData= {
//                     _id: data.id,
//                     email: data.email_addresses?.[0]?.email_address || null,
//                     name: data.first_name + " " + data.last_name,   
//                     imageUrl: data.image_url,
//                 };
//                 await User.create(userData);
//                 console.log("New user created in DB with Clerk ID:", data.id);
//                 return res.status(200).json({success: true, message:"User created webhook handled"});
//             }
//             case 'user.updated': {
//                 const userData= {
//                     email: data.email_addresses?.[0]?.email_address || null,
//                     name: data.first_name + " " + data.last_name,   
//                     imageUrl: data.image_url,
//                 };
//                 await User.findByIdAndUpdate(data.id, userData);
//                 console.log("New user created in DB with Clerk ID:", data.id);
//                 return res.status(200).json({success: true, message:"User created webhook handled"});
//             }
//             case 'user.deleted': {
//                 await User.findOneAndDelete({_id: data.id});
//                 return res.status(200).json({success: true, message:"User deleted webhook handled"});
//             }
//             default: {
//                 console.log("Unhandled webhook type:", type);
//                 return res.status(400).json({success: true, message:"Unhandled webhook type"});
//             }
//         }  
//     }catch(error){
//         console.log("Clerk Webhook Error:", error.message);
//         return res.status(500).json({success: false, message: error.message});  
//     }
// }

// module.exports= {clerkWebhooks};


require('dotenv').config();
const { Webhook } = require('svix');
const User = require('../models/User');

const clerkWebhooks = async (req, res) => {
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  // 🔴 EXACT HEADER NAMES REQUIRED
  const headers = {
    "svix-id": req.headers["svix-id"],
    "svix-timestamp": req.headers["svix-timestamp"],
    "svix-signature": req.headers["svix-signature"],
  };

  let event;

  // 🔐 VERIFY WEBHOOK (RAW BODY ONLY)
  try {
    event = wh.verify(req.body, headers);
  } catch (err) {
    console.error("❌ Webhook verification failed:", err.message);
    return res.status(400).json({ success: false });
  }

  const { data, type } = event;

  console.log("🔥 EVENT TYPE:", type);
  console.log("🔥 USER ID:", data?.id);

  try {
    switch (type) {
      case "user.created":
      case "user.updated": {
        await User.findByIdAndUpdate(
          data.id,
          {
            email: data.email_addresses?.[0]?.email_address || null,
            name: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
            imageUrl: data.image_url,
          },
          { upsert: true }
        );
        console.log("✅ MongoDB user synced:", data.id);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("🗑 MongoDB user deleted:", data.id);
        break;
      }

      default:
        console.log("ℹ️ Ignored event:", type);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
    return res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { clerkWebhooks };
