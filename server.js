const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const logger = require('morgan')
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const videoRoutes = require('./routes/videoRoutes')

app.use(logger('dev'));

app.use(
	bodyParser.urlencoded({
		extended: false,
	}),
	);

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('Hello, world! This is uFlix!');
});


app.use('/api', videoRoutes)





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.use('*', (req, res) => {
  res.status(400).json({
    error: 'Not found!'
  });
});