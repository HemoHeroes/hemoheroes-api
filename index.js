"use strict";

let app = require('./bin/server');
let port = 80;

if(process.argv.indexOf('dev') > -1){
	let morgan = require('morgan');
	port = 3000;	
	app.use(morgan('dev'));
	app.set('view cache', false);
}

app.listen(port, console.log("Connectou 3000!"));