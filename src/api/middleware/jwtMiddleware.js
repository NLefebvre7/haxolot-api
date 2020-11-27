const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

exports.verify_token = (req, res, next) => {

const token = req.headers.authorization.split(' ')[1];
if (typeof token != 'undefined') {  res.status(403); }
    if(typeof token != 'undefined') {


        jwt.verify(token, JWT_SECRET, (error) => {
            if(error) {
                res.sendStatus(403);
            }
            else {
                next();
            }
        } )

 

    }
    else {
        res.status(403);
        res.json({message: "Accès interdit"});
    }
}