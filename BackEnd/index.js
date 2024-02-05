const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.listen(port, function(){
	console.log(`Servidor Corriendo en http://localhost:${port}`);
});