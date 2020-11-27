const User = require('../models/userModel');

const jwt = require('jsonwebtoken');

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
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, project) {
        if (err) return ("erreur");
        res.send('user udpated.');
    });
};
exports.user_delete = function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.user_all = (req, res) => {
    User.find()
        .sort({ name: -1 })
        .then((user) => {
            res.status(200).send(user);
        })
};