const User=require("../models/user");
const {generateToken}=require("../utils/jwtUtils");

async function login(email,password)
{
    try {
       const existingUser= await User.findOne  ({email});
       if(!existingUser)
        {
            throw new Error("User Not Found");
        }
        const isPasswordValid=password===existingUser.password;
        if(!isPasswordValid)
            {
                throw new Error("Incorrect Password");
            }

          const token=  generateToken(existingUser)
          return token;

    } catch (error) {
        throw new Error("invalid credetionals")
    }
}

module.exports={
    login
}


 