require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
//const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(bodyParser.json({limit: '100mb' , extended: true}));
app.use(bodyParser.urlencoded({limit: '100mb',extended:true}))


app.use(cors());

//api routes
app.use('/',require('./users/controllers/users.controllers'));

app.use(errorHandler);

//start server

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5005;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);


});
