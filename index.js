const app = require('upfiles')()
			.include('config').exec();
const server = app.express;

server.listen(3000, () => console.log("Server this is open! localhost: 3000"));

