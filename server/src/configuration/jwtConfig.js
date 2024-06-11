const crypto=require("crypto");

//genearete a random seceret key
const seceretKey=crypto.randomBytes(32).toString('hex');

module.exports=
{
    seceretKey: seceretKey
}