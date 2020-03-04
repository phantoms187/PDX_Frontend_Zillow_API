const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const request = require('request');
var moment = require('moment');
const dotenv = require('dotenv');
const axios = require('axios');
const Zillow = require('node-zillow');

dotenv.config();
const port = process.env.PORT || 4000;
const darkSkyAPI = process.env.darkSkyAPI; //For weather info
var zillowAPI = new Zillow(process.env.zillowAPI);
const walkScoreAPI = process.env.walkScoreAPI; 

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

app.get('/walkscore', (req, res) => {
  //url shown in walk score api example page.
  let url = `http://api.walkscore.com/score?format=json&address=1119%8th%20Avenue%20Seattle%20WA%2098101&lat=47.6085&lon=-122.3295&transit=1&bike=1&wsapikey=${walkScoreAPI}`
  axios.get(url)
    .then( (response) => {
      res.send(response.data);  
    })
    .catch((err)=>{
      console.log(err);
    });
      
});

app.get('/bikescore', (req, res) => {
  //url shown in walk score api example page.
  let url = `http://api.walkscore.com/score?format=json&address=1119%8th%20Avenue%20Seattle%20WA%2098101&lat=47.6085&lon=-122.3295&transit=1&bike=1&wsapikey=${walkScoreAPI}`
  axios.get(url)
    .then( (response) => {
      console.log(response.data.bike);
      res.send(response.data.bike);  
    })
    .catch((err)=>{
      console.log(err);
    });
      
});


// app.post('/walkscore', (req, res) => {

//   let lat = '';
//   let lon = '';
//   let place = '';

//   async () => {
//     const geoCoordinates = await getCoordinates(place);
//       lat = geoCoordinates[0].latitude;
//       lon = geoCoordinates[0].longitude;
//       console.log("lat: " +lat);
//       console.log("long: " +long);
//       request(`http://api.walkscore.com/score?format=json&address=${place}&lat=${lat}&lon=${lon}&wsapikey=${walkScoreAPI}`,  (error, response, body) => {
//          const newBody = JSON.parse(body);
//          res.json(newBody);
//       });
//       lat = '';
//       long = '';
//   };
// });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () =>{
  console.log('Server is running on Port:', port);
});
