
const userRN = require('./../modelRN/user-bank');
const CONTROLLER = {};

CONTROLLER.getUser = (req, res) => {
    userRN.getUser(req.params.id || {})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err));
}

CONTROLLER.createUser = (req, res) => {
    userRN.createUser(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(400).json(err));
};

CONTROLLER.changeUser = (req, res) => {
    userRN.changeUser(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(400).json(err));
};

CONTROLLER.login = (req, res) => {
    res.status(200).json({
        message: "Logado com sucesso!"
    });
};

CONTROLLER.logout = (req, res) => {
    res.status(200).json({
        message: "Logout com sucesso!"
    });
};

module.exports = CONTROLLER;