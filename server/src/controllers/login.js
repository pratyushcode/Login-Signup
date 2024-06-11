const authService=require("../services/login");

async function login(req,res)
{
    try {
        const {email,password}=req.body;
        const token=await authService.login(email,password);
        res.json({token});

        
    } catch (error) {
        res.status(401).json({message:"invalid Credentials"});
    }

}

module.exports={
    login
}