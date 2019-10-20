//const dbConfig = require('database.config.js');
const mongoose = require('mongoose');
//import Promise from require('bluebird');
const dbConfigUrl = "mongodb://localhost:27017/article";

module.exports = (bluebird) => {
	mongoose.Promise = bluebird;


	// Connecting to the database
	mongoose.connect(dbConfigUrl, {
	    useNewUrlParser: true,
	}).then(() => {
	    console.log("Successfully connected to the database");    
	}).catch(err => {
	    console.log('Could not connect to the database. Exiting now...', err);
	    process.exit();
	});

	return mongoose;	
}

