const Team = require('../models/teamModel');


const jwt = require('jsonwebtoken');

exports.create_a_team = (req, res) => {
    let new_team = new Team(req.body);
    console.log(req.body);

    new_team.save((error, team) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(201);
            res.json({
                message: `Team créé: ${team.name}`
            })
        }
    })
}

exports.team_all = (req, res) => {
    var listTeam = [];
    Team.find()
        .sort({ name: -1 })
        .then((team) => {
            team.forEach(element => {
            listTeam.push(element.name);
            }
            );
            res.status(200).send(listTeam);
        })
};

exports.team_details = (req, res) => {
    Team.findOne({
        name: req.body.name
    }, (error, team) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
                res.status(200).send(team);
                console.log(team);
                
            }


        }
)
};




