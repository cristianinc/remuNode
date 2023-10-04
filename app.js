require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const hbs = require('hbs');

const dbConnect = require('./config/mongo')

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


app.use( cors() );
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use( '/',require('./routes/index') );


const port = process.env.PORT || 3000;


dbConnect();

app.listen( port, () => {
    console.log(`tu app esta iniciada en http://localhost:${port}`)
})