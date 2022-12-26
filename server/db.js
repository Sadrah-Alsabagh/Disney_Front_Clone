const mongoose = require('mongoose');
module.exports = async()=>{
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology:true 
    }
    try{
        await mongoose.connect(process.env.DB, connectionParams)
        console.log("connected to database successfuly");
    }catch(error){
        console.log("Couldn't connect to database");
    }
    // mongoose.set('strictQuery', true)

}