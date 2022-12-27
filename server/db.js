const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();


module.exports = async () => { 

	const connectionParams = {       
		useNewUrlParser: true,
		useUnifiedTopology: true,

	};
	try {
		await mongoose.connect(process.env.DB, connectionParams);
		console.log("connected to database successfully");
	} catch (error) {
		console.log("could not connect to database.", error);
	}
};