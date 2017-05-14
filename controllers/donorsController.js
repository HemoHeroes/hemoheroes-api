'use strict';
var DonorsService = loadedModule('services/donors');
var DonorsController = {};

DonorsController.list = (req, res) => {
	DonorsService.list({})
	.then(success => res.status(200).json(success))
	.catch(err => res.status(400).send(err));
	return;
};
DonorsController.insert = (req, res) => {
	DonorsService.insert(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
DonorsController.alter = (req, res) => {
	DonorsService.alter(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
DonorsController.remove = (req, res) => {
	DonorsService.remove(req.body)
	.then(success => res.status(200).json(success))
	.catch(err => res.status(400).send(err));
};

module.exports = DonorsController;
