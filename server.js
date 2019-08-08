const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//build
const path = require('path');

const items = require('./routes/api/items');

const app = express();

//body parser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

//use routes
app.use('/api/items', items);

//build: serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	//set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
} //package.js in server :build post build script

//connect to server,heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
