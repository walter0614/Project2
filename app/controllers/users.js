// Dependencies
var mongoose = require('mongoose');
var User = require('../models/user.js');

//GET - Return all registers
exports.findAll = function(req, res) {
	User.find(function(err, users) {
		if(err) return res.status(500).send(err.message);
		res.status(200).json(users);
	});
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		if(err) return res.status(500).send(err.message);
		res.status(200).json(user);
	});
};

//POST - Insert a new register
exports.add = function(req, res) {
	var user = new User({
		cc: req.body.cc,
		data: req.body.data,
		email: req.body.email,
		name: req.body.name,
		pwd: req.body.pwd,
		created_at: {type: Date, default: Date.now},
		updated_at: {type: Date, default: Date.now}
	});
	user.save(function(err, user) {
		if(err) return res.status(500).send(err.message);
		res.status(200).json(user);
	});
};

//PUT - Update a register already exists
exports.update = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		var user = new User({
			cc: req.body.cc,
			data: req.body.data,
			email: req.body.email,
			name: req.body.name,
			pwd: req.body.pwd
		});
		user.save(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).json(user);
		});
	});
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		user.remove(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
};