const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const request = require('request');
var moment = require('moment');
const dotenv = require('dotenv');
const axios = require('axios');
const fetch = require('node-fetch');

dotenv.config();
const port = process.env.PORT || 4000;
const darkSkyAPI = process.env.darkSkyAPI || ""; //For weather info
const walkScoreAPI = process.env.walkScoreAPI || "";

const fs = require('fs');
//Variables and function for the geo-coordinates to translate address
var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'opencage',
  apiKey: process.env.openCageAPI || ""
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

// App specifications to use React static build files
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/build/')));
//Weather API gets coordinates from geocoder and sends to dark sky to get weather information
app.post('/weather', (req, res) => {
    let lat = '';
    let long = '';
    let place = req.body.street + " " + req.body.city + ", " + req.body.state + " " + req.body.zip;
    (async () => {
      const geoCoordinates = await getCoordinates(place);
        lat = geoCoordinates[0].latitude;
        long = geoCoordinates[0].longitude;
        request('https://api.darksky.net/forecast/' + darkSkyAPI + '/' + lat +',' + long, function (error, response, body) {
            const newBody = JSON.parse(body);
            res.json(newBody);
        });
        lat = '';
        long = '';
    })();
});

//Get data through walkscore API and respond to this call.
app.post('/walkscore', (req, res) => {
  let lat = '';
  let long = '';
  let place = req.body.street + " " + req.body.city + ", " + req.body.state + " " + req.body.zip;

  geocoder.geocode(place)
    .then(function(geores) {
      lat = geores[0].latitude;
      lon = geores[0].longitude;
      let url = `http://api.walkscore.com/score?format=json&address=${place}&lat=${lat}&lon=${lon}&transit=1&bike=1&wsapikey=${walkScoreAPI}`;
      axios.get(url)
        .then( (response) => {
          res.send(response.data);
        })
        .catch((err)=>{
          console.log(err);
        });
    })
    .catch(function(err) {
      console.log(err);
    });

});

app.post('/neighbor', (req,res) => {

  let lat = '';
  let long = '';
  let place = req.body.street + " " + req.body.city + ", " + req.body.state + " " + req.body.zip;

  geocoder.geocode(place)
    .then(function(geores) {
      lat = geores[0].latitude;
      lon = geores[0].longitude;
      let url = `https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=5&currency=USD&distance=2&lunit=km&lang=en_US&latitude=${lat}&longitude=${lon}`;
      params = {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": ""
        }
      };
      axios.get(url,params)
        .then( (response) => {
          //console.log(response.data.data);
          res.send(response.data.data);
        })
        .catch((err)=>{
          console.log(err);
        });
    })
    .catch(function(err) {
      console.log(err);
    });
});

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });
app.listen(port, () =>{
  console.log('Server is running on Port:', port);
});
