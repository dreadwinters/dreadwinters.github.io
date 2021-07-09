// ========================================================================
// Server init
// ========================================================================

// Filesystem reading functions
const fs = require('fs-extra');

// Load settings
try {
	stats = fs.lstatSync('settings.json');
} catch (e) {
	// If settings do not yet exist
	if (e.code == "ENOENT") {
		try {
			fs.copySync(
				'settings.example.json',
				'settings.json'
			);
			console.log("Created new settings file.");
		} catch(e) {
			console.log(e);
			throw "Could not create new settings file.";
		}
	// Else, there was a misc error (permissions?)
	} else {
		console.log(e);
		throw "Could not read 'settings.json'.";
	}
}

// Load settings into memory
const settings = require("./settings.json");

// Setup basic express server
var express = require('express');
var app = express();  
var cors = require("cors")
var http = require("http");
const url = require('url');
if (settings.express.serveStatic)
	app.use(express.static('../build/www', {
		extensions: ['html']
	}));
var server = require('http').createServer(app, console.log());
  
server.listenerCount(1);
// Init socket.io
var io = require('socket.io')(server);
var port = process.env.PORT || settings.port;
exports.io = io;

// Init sanitize-html
var sanitize = require('sanitize-html');

// Init winston loggers (hi there)
const Log = require('./log.js');
Log.init();
const log = Log.log;

// Load ban list
const Ban = require('./ban.js');
Ban.init();
 
// Start actually listening
server.listen(port, function () {
	console.log(
		"Welcome to BonziWORLD Revived developer build 2.3.1-SNAPSHOT!\n",
		"Time to meme!\n",
		"----------------------\n",
		"Server listening at port " + port + "\n",
		"----------------------Logs----------------------\n"
	);
});
app.options('*', cors())
app.use(express.static(__dirname + '/public', {
	extensions: ['html']
}));
app.get('/api/v1/', (req, res) => res.sendStatus('hello world'))
app.get('/api/v1/rooms/', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(require('./rooms.json')));
})
const { exec } = require("child_process");
app.get('/api/v1/sapi', function(req, res){
	if (req.query) {
		if (req.query.text && req.query.pitch && req.query.speed && req.query.guid) {
			if (req.query.char && req.query.char == "Paul") {
				var eura = `balcon.exe -n "Adult Male #1, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			} else if (req.query.char && req.query.char == "paul") {
				var eura = `balcon.exe -n "Adult Male #1, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			} else if (req.query.char && req.query.char == "Robby") {
				var eura = `balcon.exe -n "Adult Male #7, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			} else if (req.query.char && req.query.char == "robby") {
				var eura = `balcon.exe -n "Adult Male #7, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			} else if (req.query.char && req.query.char == "Genius") {
				var eura = `balcon.exe -n "Adult Male #8, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			} else if (req.query.char && req.query.char == "genius") {
				var eura = `balcon.exe -n "Adult Male #8, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			} else if (req.query.char && req.query.char == "Merlin") {
				var eura = `balcon.exe -n "Adult Male #3, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			} else if (req.query.char && req.query.char == "merlin") {
				var eura = `balcon.exe -n "Adult Male #3, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			} else {
				var eura = `balcon.exe -n "Adult Male #2, American English (TruVoice)" -w "` + req.query.guid + `_speech.wav" -s `+ Number(req.query.speed) + ` -p `+ Number(req.query.pitch) +` -t "`+ req.query.text + `" `;
				exec(eura, (err, stdout, stderr) => {
					if (err) {
						console.log("Error occurred: ", err);
						res.sendStatus(400).write("400 Bad Request<br>An error has occurred. Bonzi might be messing up the computer parts again. " + err)
						return;
					}
				});
			}
			setTimeout(function(){
				var stream = fs.createReadStream("./"+req.query.guid+"_speech.wav")
				stream.on('open', function () {
					stream.pipe(res) 
				});	
				stream.on('error', function (err) {
					res.sendStatus(400).write("400 Bad Request <br><br>An error has occurred. Bonzi might be messing up the computer parts again.<br>" + err)
				});	
			},500)
		} else {
			res.sendStatus(403).write("403 Forbidden<br><br>An error has occurred. Bonzi might be messing up the computer parts again.<br> There was no valid query string paremeters.")
		}
	} else {
		res.sendStatus(403).write("403 Forbidden<br><br>An error has occurred. Bonzi might be messing up the computer parts again.<br> There was no query string paremeters.")
	}
	res.writeHead(200, {
		'Content-Type': 'audio/wav'
	});
})
app.use(function(req,res){
	res.status(200).type('html').sendFile(__dirname + '/200.html')
})
// ========================================================================
// Banning functions
// ========================================================================

// ========================================================================
// Helper functions
// ========================================================================

const Utils = require("./utils.js")

// ========================================================================
// The Beef(TM)
// ========================================================================

const Meat = require("./meat.js");
Meat.beat();
// Console commands
const Console = require('./console.js');
Console.listen();
