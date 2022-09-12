const bcrypt = require('bcryptjs');

const User = require('../models/user.model');

// POST root/api/auth/signup
module.exports.signup = (req, res) => {
    if (!req.body.email || !req.body.firstname || !req.body.lastname || !req.body.password) {
        return res.status(400).json({
            error: 'Bad request.'
        });
    }

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(409).json({
                    error: 'EMAIL_ALREADY_IN_USE'
                });
            }

            bcrypt.hash(req.body.password, 10)
                .then((hashedPassword) => {
                    const user = new User({
                        email: req.body.email,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        password: hashedPassword,
                        isAdmin: false
                    });

                    user.save()
                        .then((user) => {
                            res.status(201).json({
                                message: 'User created.',
                                user: user
                            });
                        })
                        .catch((error) => {
                            res.status(500).json({
                                message: 'Signup failed.',
                                error: error
                            });
                        });
                });
        })
        .catch(() => {
            return res.status(500).json({
                error: 'Internal error.'
            });
        });
};