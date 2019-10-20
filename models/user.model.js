const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userId: {
    	type : String,
    	unique:true
    },
    password:{
    	type: String
    }, 
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);