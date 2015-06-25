[![NPM](https://nodei.co/npm/dronebl.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dronebl/)

# DroneBL
DroneBL IP Address Lookup in Node.js

[![Coverage Status](https://coveralls.io/repos/AlphaT3ch/DroneBL/badge.svg)](https://coveralls.io/r/AlphaT3ch/DroneBL)
[![Travis CI Status](https://travis-ci.org/AlphaT3ch/DroneBL.svg)](https://travis-ci.org/AlphaT3ch/DroneBL)

Example Lookup:

First run ```npm install dronebl``` to install the DroneBL package to your system.

```javascript
var DroneBL = require('dronebl');

DroneBL.lookup('8.8.8.8', function(res) {
	console.log(res); //Returns false since 8.8.8.8 is not listed
});

DroneBL.lookup('213.163.51.164', function(res) {
	console.log(res); //Returns true since 213.163.51.164 is listed
});
```