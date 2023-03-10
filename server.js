var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

var conexion = mysql.createConnection({
	host: "34.232.233.57",
	user: "Amir",
	password: "myDB123",
	database: "Colectivo_Sur_Real"
});

conexion.connect(function (error) {
	if (error) {
		console.log(error)
		throw error;
	} else {
		console.log("Conexión exitosa");
	}
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
	console.log("Servidor funcionando en puerto: " + puerto);
});

app.post("/api/contactanos", (req, res) => {
	console.log('datos : ', req.body);
	let data = {
		nomcon: req.body.nombre,
		corrcon: req.body.correo,
		asucon: req.body.asunto,
		descon: req.body.descripcion
	};
	let sql = "INSERT INTO Logeo SET ?";
	conexion.query(sql, data, function (error, results) {
		if (error) {
			throw error;
		} else {
			console.log(data);
			res.send(data);
		}
	});
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get('/login', function (req, res) {
	res.sendFile(__dirname + "/login.html");
});

// http://localhost:3000/auth
app.post('/auth', function (request, response) {
	console.log('DATOS : ', request.body);
	let username = request.body.username;
	let password = request.body.password;

	if (username && password) {

		conexion.query('SELECT * FROM Logeo WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
			if (error) throw error;

			if (results.length > 0) {
				response.send('Te has logueado satisfactoriamente:, ' + request.body.username + '!');
			} else {
				response.send('Usuario y/o Contraseña Incorrecta');
			}
			response.end();
		});
	} else {
		response.send('Por favor ingresa Usuario y Contraseña!');
		response.end();
	}
});

