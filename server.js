const express = require('express');
const app = express();
const http = require('http').Server(app);

const Five = require('johnny-five');
const Board = new Five.Board();

const io = require('socket.io')(http);
const path = require('path');

app.get('/', (req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, './')})
})

Board.on('ready', () => {
	console.log('Board ready');

	const wheels = new Five.Servos([
		{
			pin: 4,
			type: 'continuous'
		},
		{
			pin: 5,
			type: 'continuous',
			invert: true
		}

	])

	io.on('connection', socket => {
		console.log('a user connected');
		socket.on('left', data => {
				console.log('left', data);
				wheels[0].cw(data);
		});

		socket.on('right', data => {
				console.log('right', data);
				wheels[1].cw(data);
		});

		socket.on('wheels', data => {
				console.log('wheels', data);
				wheels.cw(data);
		});

		socket.on('stop', data => {
				console.log('stop');
				wheels.stop();
		});

		socket.on('sweep', data => {
				console.log('sweep');
				wheels.sweep();
		});

	});
});

http.listen(3001, () => {
	console.log('Server running on http://localhost:3001');
})
