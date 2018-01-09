var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoUri = 'mongodb://localhost:27017/guidemanagement';
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var Balancer = require('./loadbalancer');

var authenticate = require('./controller/authenticate');
var route = require('./controller/route');
var station = require('./controller/station');
var panel = require('./controller/panel');

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


app.post('/checkAuthentification', authenticate.checkAuthentication);

app.post('/getstations', station.getstations);
app.post('/getstation', station.getstation);

app.post('/startStation', station.startStation);
app.post('/endStation', station.endStation);

app.post('/newRoute', route.newRoute);
app.post('/endRoute', route.endRoute);

app.post('/getCountOfStations', station.getCountOfStations);

app.post('/createReport', panel.createReport);
app.post('/currunningRoutes', panel.currunningRoutes);
app.post('/curTimeAtStations', panel.curTimeAtStations);
app.post('/generateGuides', panel.generateGuides);
app.post('/getGuides', panel.getGuides);
app.post('/guideAuslastung', panel.guideAuslastung);

app.post('/ohShitMyBallz', panel.ohShitMyBallz);

app.listen(3000);
console.log("Server up and running on port 3000");