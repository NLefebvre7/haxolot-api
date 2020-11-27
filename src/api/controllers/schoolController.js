const School = require('../models/school.model');

//Simple version, without validation or sanitation

//CREATE
exports.school_create = function(req, res) {
    let school = new School({
        name: req.body.name
    });

    school.save(function(err) {
        if (err) {
            return next(err);
        }
        res.send('school Created  successfully')
    })
};

//READ
exports.school_all = (req, res) => {
    School.find()
        .sort({ name: -1 })
        .then((school) => {
            res.status(200).send(school);
        })
};

//UPDATE
exports.school_update = function(req, res) {
    School.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, project) {
        if (err) return (err);
        res.send('School udpated.');
    });
};

//DELETE
exports.school_delete = function(req, res) {
    School.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('school Deleted successfully!');
    })
};

exports.school_all = (req, res) => {
    School.find()
        .sort({ name: -1 })
        .then((school) => {
            res.status(200).send(school);
        })
};