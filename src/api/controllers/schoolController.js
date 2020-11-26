const User = require('../models/schoolModel');

const jwt = require('jsonwebtoken');

exports.create_school = (req, res) => {
    let new_school = new School(req.body);

    new_school.save((error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(201);
            res.json({
                message: `Ecole créée: ${school.name}`
            })
        }
    })
}
