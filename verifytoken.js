const jwt = require('jsonwebtoken');

module.exports = auth = (req,res,next) => {
	const token = req.header('auth-token');
	if(!token) return res.status(401).send('Access Denied');

	try{

		const verified = jwt.verify(token , 'Test123');
		req.user = verified;
		next();

	}catch(err){

		return res.status(400).send('Invalid Token');
	}

}