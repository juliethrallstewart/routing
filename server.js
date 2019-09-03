// see a list of pre-populated movies
// add a movie to the list
// update movie information
// remove a movie
// see only released movies
const express = require('express');
const server = express();
let actors = [
	{
		id: 1,
		name: 'Elijah Wood',
		movies: [ 1, 2 ]
	},
	{
		id: 2,
		name: 'Chris Evans',
		movies: [ 4 ]
	}
];
let movies = [
	{
		id: 1,
		name: 'The Fellowship of the Ring',
		released: true,
		rating: 5
	},
	{
		id: 2,
		name: 'The Two Towers',
		released: true,
		rating: 4
	},
	{
		id: 3,
		name: 'The Children of Hurin',
		released: false,
		rating: null
	},
	{
		id: 4,
		name: 'Avengers Endgame',
		released: true,
		rating: 5
	}
];
// sanity check endpoint
server.get('/', (req, res) => {
	res.status(200).json({ api: 'up...' });
});

server.get('/api/movies', (req, res) => {
	res.status(200).json(movies);
});
// export default server; // ES2015 modules
// module.exports = { server }; // CommonJS modules (node)
module.exports = server; // CommonJS modules (node)

exports.add = (a, b) => {
	return a + b;
};
//to run in terminal $node index.js or npm run dev

//nodemon means node monitor, we need nodemon so that the server will
//auto update

//by installing nodemon, and changing node to nodemon in the server script
//in package.json.. it will watch for changes

//to start .. npm run server

//rather than using "server" as the name of your script, you can
//use 'dev' .. which would be 'npm run dev'

//routing is a way to conditionally run code based on URL and METHOD

// see a list of pre-populated movies

// add a movie to the list

// update movie information

// remove a movie

// see only released movies
