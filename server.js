const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const request = require('request');
var moment = require('moment');
const dotenv = require('dotenv');
const axios = require('axios');
//const Zillow = require('node-zillow');
const fetch = require('node-fetch');



dotenv.config();
const port = process.env.PORT || 4000;
const darkSkyAPI = process.env.darkSkyAPI || "50bf69053e2a6f09b468d70eba530349"; //For weather info
// var zillowID = process.env.zillowAPI || "X1-ZWz1hn7j7dra4r_6h6e1";
// var zillowAPI = new Zillow(zillowID);
const walkScoreAPI = process.env.walkScoreAPI;

const fs = require('fs');
//const mysql = require('mysql');

dotenv.config();

<<<<<<< HEAD
// const data = fs.readFileSync('./database.json');
// const conf = JSON.parse(data);
// const connection = mysql.createConnection({
//   host: process.env.HOST || conf.host,
//   user: process.env.USER || conf.user,
//   password: process.env.PASSWORDDB || conf.password,
//   port: process.env.PORTDB || conf.port,
//   database: process.env.DB || conf.database
// });
// connection.connect();
=======
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();
>>>>>>> ed6db5f6dd3172b0571c0f2454736ec984d0ae14

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

app.post('/walkscore', (req, res) => {

  let lat = '';
  let long = '';
  let place = req.body.street + " " + req.body.city + ", " + req.body.state + " " + req.body.zip;

  geocoder.geocode(place)
    .then(function(geores) {
      lat = geores[0].latitude;
      lon = geores[0].longitude;
      let url = `http://api.walkscore.com/score?format=json&address=${place}&lat=${lat}&lon=${lon}&wsapikey=${walkScoreAPI}`;
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

app.post('/bikescore', (req, res) => {

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
          res.send(response.data.bike);
        })
        .catch((err)=>{
          console.log(err);
        });
    })
    .catch(function(err) {
      console.log(err);
    });

});

// app.get('/zillow', (req, res) => {
//   var parameters = {
//     zpid: 48690106
//   };
//
//   zillowAPI.get('GetZestimate', parameters)
//     .then(function(results) {
//       console.log(results);
//       // results here is an object { message: {}, request: {}, response: {}}
//     });
//
// });
//
// app.get('/zillow', (req, res) => {
//   let street = '232 SW 200th Ave';
//   let city = 'Beaverton';
//   let state = 'OR';
//   let zip = '97006';
//   connection.query(
//     "SELECT * FROM REALESTATE WHERE street = '232 SW 200th Ave' AND city='Beaverton' AND state='OR' AND zip='97006'",
//     (err,rows,fields) => {
//       console.log(rows);
//       res.send(rows);
//     }
//   );
// });



// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

app.listen(port, () =>{
  console.log('Server is running on Port:', port);
});
