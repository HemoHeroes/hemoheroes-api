'use strict';

const utils = loadedModule('utils');
const Donors = loadedModule('model/Donors');

const CRUD = utils.crud;
const DonorsService = {};

DonorsService.list = (seek) => {
	let data = {
		model : Donors,
		seek : seek
	};
	return CRUD.list(data)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;
};

DonorsService.insert = (data) => {
	var newObj = new Donors(data);
	return CRUD.add(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;
};

DonorsService.alter = (param) => {
	let data = {
		model: Donors,
		data: param
	};
	return CRUD.update(data)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

DonorsService.remove = (param) => {
	let data = {
		model: Donors,
		data: param
	};
	return CRUD.remove(data)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

module.exports = DonorsService;
