console.log('run this with node');

const server = require('./server.js');

const port = 8000;
server.listen(port, () => console.log(`\n API on Port ${port}\n`));

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
