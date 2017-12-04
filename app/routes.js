// Dependencies
var UserCtrl = require('./controllers/users.js');
var CategoryCtrl = require('./controllers/categories.js');

// Opens App Routes
module.exports = function(express,app) {

// HOME
app.get('/', function(req, res, next) {
	res.sendfile('./public/index.html');
});

//API
var api = express.Router();
 //USERS
 api.route('/users') 
 .get(UserCtrl.findAll)
 .post(UserCtrl.add);
 api.route('/users/:id') 
 .get(UserCtrl.findById)
 .put(UserCtrl.update)
 .delete(UserCtrl.delete);
 app.use('/api/v1/', api);

  //CATEGORYS
 api.route('/categories') 
 .get(CategoryCtrl.findAll)
 .post(CategoryCtrl.add);
 api.route('/categories/:id') 
 .get(CategoryCtrl.findById)
 .put(CategoryCtrl.update)
 .delete(CategoryCtrl.delete);
 app.use('/api/v1/', api);

};