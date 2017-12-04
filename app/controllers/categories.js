// Dependencies
var mongoose = require('mongoose');
var Category = require('../models/category.js');

//GET - Return all registers
exports.findAll = function(req, res) {
	Category.find(function(err, categorys) {
		if(err) return res.status(500).send(err.message);
		res.status(200).json(categorys);
	});
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	Category.findById(req.params.id, function(err, category) {
		if(err) return res.status(500).send(err.message);
		res.status(200).json(category);
	});
};

//POST - Insert a new register
exports.add = function(req, res) {
	var category = new Category({
		color: req.body.color,
		description: req.body.description,
		name: req.body.name,
		type: req.body.type,
		created_at: {type: Date, default: Date.now},
		updated_at: {type: Date, default: Date.now}
	});
	category.save(function(err, category) {
		if(err) return res.status(500).send(err.message);
		res.status(200).json(category);
	});
};

//PUT - Update a register already exists
exports.update = function(req, res) {
	Category.findById(req.params.id, function(err, category) {
		var category = new Category({
			color: req.body.color,
			description: req.body.description,
			name: req.body.name,
			type: req.body.type
		});
		category.save(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).json(category);
		});
	});
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
	Category.findById(req.params.id, function(err, category) {
		category.remove(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
};