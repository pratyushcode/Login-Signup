const User=require("../models/user");
// const bcrypt=require("bcrypt");

const createUser=async(userData)=>
{
    const {name,email,password}=userData;
    // const hashedpassword=bcrypt.hash(password,10);

    const createUser=new User({
        name,
        email,
        password,
        role:"customer"
    })

    try {
        await createUser.save();
    } catch (error) {
        console.log(error);
    }
    
    return createUser
    
    
}

module.exports={createUser};