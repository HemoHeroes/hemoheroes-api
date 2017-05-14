const 	upfiles = require('upfiles')()
		.then('config')
		.then('controllers')
		.exec();

const 	config 		 		= upfiles.config;
const   app 		 		= upfiles.express;

/* Controllers / Routes */
const donorsController = upfiles.donorsController;

//Initial Sever
app.listen(config.server.port, () => console.log('Start Server /' + config.server.host + ':' + config.server.port) );

//Main
app.route('/')
	.get(function(req, res){
		res.send("Hellor World!!!");
	});

app.route('/donors')
	.get(donorsController.list)
	.post(donorsController.insert)
	.put(donorsController.alter)
	.delete(donorsController.remove)
;
