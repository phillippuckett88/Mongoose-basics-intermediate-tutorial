var User = require('../models/user');

module.exports = {
    createUser: function (req, res, next) {
        new User(req.body).save(function (err, createUser) {
            if (err) { res.status(500).send(err); }
            else { res.send(createUser); }
        })
    },
    readUser: function (req, res, next) {
        User.find.populate('cart').exec().then(function (err, readUser) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send(readUser); }
        })
    },
    updateUser: function (req, res, next) {
        User.findByIdAndUpdate(req.query.id), { $set: req.body }, function (err, updateUser) {
            if (err) { res.status(500).send(err); }
            else { res.send(updateUser); }
        }
    },
    deleteUser: function (req, res, next) {
        User.findByIdAndRemove(req.query.id, function (err, deleteUser) {
            if (err) { res.status(500).send(err); }
            else { res.send(deleteUser); }
        })
    },
};