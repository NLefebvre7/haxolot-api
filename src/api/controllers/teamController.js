const Team = require('../models/teamModel');
const User = require('../models/userModel');

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

    //console.log(req.session.email);
    User.findOne({
        email: req.session.email
    }, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "User not found."
            })
        } else {
            //console.log(user.school);
            var listTeam = [];
            Team.find({
                school: user.school
            }
            )
                .sort({ name: -1 })
                .then((team) => {
                    team.forEach(element => {
                        listTeam.push([element.name, element.school]);
                    }
                    );

                    res.status(200).send(listTeam);
                })


        }


    }
    )

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




