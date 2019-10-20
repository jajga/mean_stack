const Joi = require('@hapi/joi');

//Sign up Validation of user 

const registerValidation =  (data) => {

	const registerSchema = Joi.object({
		userid : Joi.string().min(6).required(),
		password : Joi.string().min(6).required(),
		email : Joi.string().min(6).required()					
	})

	return registerSchema.validate(data);
}

	


//Login Validation of user 

const loginValidation =  (data) => {

	const loginSchema = Joi.object({
		userid : Joi.string().min(6).required(),
		password : Joi.string().min(6).required()				
	})

	return loginSchema.validate(data);
}


module.exports.registerValidation =  registerValidation;
module.exports.loginValidation =  loginValidation;	