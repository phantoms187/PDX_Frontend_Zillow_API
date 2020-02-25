const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const request = require('request');
var moment = require('moment');
var Zillow = require('node-zillow');


const port = process.env.PORT || 4000;
const darkSkyAPI = process.env.darkSkyAPI; //For weather info
var zillowAPI = new Zillow(process.env.zillowAPI);

var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'opencage',
  apiKey: process.env.openCageAPI
};
var geocoder = NodeGeocoder(options);
function getCoordinates(place) {
    return new Promise((resolve, reject) => {
        geocoder.geocode(place, function(err,res) {
            if(err)
                reject(err);
            else
                resolve(res);
            });
    });
}
// Routes
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/build/')));

app.post('/weather', (req, res) => {

    let lat = '';
    let long = '';
    let place = req.body.street + " " + req.body.city + ", " + req.body.state + " " + req.body.zip;
    let time = moment(req.body.date + " " + req.body.time, 'dddd, MMMM Do YYYY h:mm A').unix();

    async () => {
      const geoCoordinates = await getCoordinates(place);
        lat = geoCoordinates[0].latitude;
        long = geoCoordinates[0].longitude;
        request('https://api.darksky.net/forecast/' + darkSkyAPI + '/' + lat +',' + long + ',' + time, function (error, response, body) {
            const newBody = JSON.parse(body);
            res.json(newBody);
        });
        lat = '';
        long = '';
    };
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () =>{
  console.log('Server is running on Port:', port);
});
