[![NPM](https://nodei.co/npm/dronebl.png?downloads=true&stars=true)](https://npmjs.com/package/dronebl/)

# DroneBL [![Build Status(https://travis-ci.org/AlphaT3ch/DroneBL.svg?branch=master)](https://travis-ci.org/AlphaT3ch/DroneBL)
DroneBL IP Address Lookup in Node.js

Also check out my [BarracudaCentral](https://npmjs.com/package/barracudacentral) and [SpamCop](https://npmjs.com/package/spamcop) packages.

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

[This Package Is Under The MIT License](https://raw.githubusercontent.com/AlphaT3ch/DroneBL/master/LICENSE.txt)
