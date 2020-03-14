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
//Variables and function for the geo-coordinates to translate address
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
//walkscore API to get walk and bike score information
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

app.listen(port, () =>{
  console.log('Server is running on Port:', port);
});
