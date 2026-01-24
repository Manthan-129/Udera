const { clerkClient }= require('@clerk/express');

const updateRoleToEducator = async (req, res)=>{
    try{
        const userId= req.auth.userId
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator',
            }
        })
        return res.status(200).json({success: true, message: "User role updated to educator"});
    }catch(error){
        console.log(error.message);
        return res.status(500).json({success: false, message: error.message});
    }
}

module.exports= {updateRoleToEducator};