const User = require('../models/userModel');

const jwt = require('jsonwebtoken');

const jwtMiddleware = require('../middleware/jwtMiddleware');

exports.create_an_user = (req, res) => {
    let new_user = new User(req.body);
    console.log(req.body);

    new_user.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(201);
            res.json({
                message: `Utilisateur crée : ${user.email}`
            })
        }
    })
}

exports.login_an_user = (req, res) => {

    User.findOne({
        email: req.body.email
    }, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            if (user.password === req.body.password) {
                jwt.sign({
                    email: user.email,
                    role: "user"
                }, process.env.JWT_SECRET, {
                    expiresIn: '30 days'
                }, (error, token) => { 
                    if (error) {
                        res.status(400);
                        console.log(error);
                        res.json({
                            message: "Mot de passe ou email erroné."
                        })
                    } else {
                        req.session.email = user.email;
                        res.json({
                            token
                        })
                        
                    }

                })
            } else {
                res.status(400);
                console.log(error);
                res.json({
                    message: "Mot de passe ou email erroné."
                })
            }


        }
    })
}
exports.user_update = function(req, res) {
    User.findByIdAndUpdate(req.params.user_id, req.body, {new: true}, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(user)
        }
    });
};
exports.user_delete = function(req, res) {
    User.findByIdAndRemove(req.params.user_id, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json({message: "Utilisateur supprimé !"})
        }
    })
};

exports.user_all = (req, res) => {
    User.find()
        .sort({ name: -1 })
        .then((user) => {
            res.status(200).send(user);
        })
};


