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
const darkSkyAPI = process.env.darkSkyAPI || "50bf69053e2a6f09b468d70eba530349"; //For weather info
const walkScoreAPI = process.env.walkScoreAPI || "6698dd1f586b5e3804c58da4f335cbc8";

const fs = require('fs');

var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'opencage',
  apiKey: process.env.openCageAPI || "464ba334d812473fa18bc2b34e8ad854"
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
          "x-rapidapi-key": "8d488bea97msh3d5e1feb78b4ff6p1550e7jsnb35a6d4f5efa"
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
