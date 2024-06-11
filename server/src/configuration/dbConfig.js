const mongoose = require('mongoose');

const dbconnect=async ()=>
{
    try {
        await mongoose.connect("mongodb://pratyush:pratyush123@ac-1fwtvag-shard-00-00.dbzjd9q.mongodb.net:27017,ac-1fwtvag-shard-00-01.dbzjd9q.mongodb.net:27017,ac-1fwtvag-shard-00-02.dbzjd9q.mongodb.net:27017/?ssl=true&replicaSet=atlas-uk9pij-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
        console.log("dp is up");
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbconnect;