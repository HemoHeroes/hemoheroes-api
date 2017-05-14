const express 		= require('express');
const bodyParser 	= require('body-parser');
const helmet        = require('helmet');
const morgan		= require('morgan');
const app 			= express();

app.set('trust proxy', 1) // trust first proxy

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff())
app.use(helmet.ieNoOpen());

app.use(helmet.hsts({
	"maxAge": 15778476000,
	"includeSubdomains": true,
	"force": true
}));

app.disable("x-powered-by");

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST', 'DELETE']);
	res.append('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers');
	next();
});

module.exports = app;
