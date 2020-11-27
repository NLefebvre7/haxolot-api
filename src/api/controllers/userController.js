const User = require('../models/userModel');

const jwt = require('jsonwebtoken');

exports.create_an_user = (req, res) => {
    let new_user = new User(req.body);

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




exports.update_an_user = (req, res) => {

    User.findByIdAndUpdate(req.params.user, 
        {
           $set : {
                email: req.body.email,
                password: req.body.password
            }
        },
        (err, user) => {
             // Some handle 
             if (error) {
                res.status(400);
                console.log(error);
                res.json({
                    message: "erreur serveur"
                })
            } else {
                res.json({
                    message: "le compte est mis à jour"
                })
            }
           }
        );

}


exports.delete_an_user = (req, res) => {
    Comment.findByIdAndRemove(req.params.email, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json({
                message: "Utilisateur supprimé !"
            })
        }
    })
}