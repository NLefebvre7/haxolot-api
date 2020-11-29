const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let memberSchema = new Schema({
    firstname:{
        type: String,
        //required:"prénom requis"
    },
    email:{
        type: String,
        required: "email requis"
    },
    phoneNumber:{
        type: String,
        //required:"numéro téléphone requis",
        //unique: true
    },
    name:{
        type: String,
        required: "nom requis"
    }

});

let teamSchema = new Schema({
    name: {
        type: String,
        required: "Le nom de l'équipe",
        unique: true
    },
    projectTitle: {
        type: String,
        required: "Le nom du projet",
        unique: true
    },
    school: {
        type: String,
        required: "Le nom de l'ecole est requise"
    },
    projectDescription: {
        type: String,
        required:"Décrivez votre projet"
    },
    aboutTheTeam: {
        type : String,
        //required: "Pourquoi devrions-nous vous selectionner?"
    },
    members : [memberSchema]

});


module.exports = mongoose.model('Team', teamSchema);