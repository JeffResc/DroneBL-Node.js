# DroneBL
DroneBL IP Address Lookup in Node.js

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