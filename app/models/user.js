var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({ 
	cc: { type: String, required: true },
	data: { type: String, required: true },
	email: { type: String, required: true },
	name: { type: String, required: true },
	pwd: { type: String, required: true },
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

// Sets the created_at parameter equal to the current time
userSchema.pre('save', function(next){
	now = new Date();
	this.updated_at = now;
	if(!this.created_at) {
		this.created_at = now
	}
	next();
});

module.exports = mongoose.model('User', userSchema);