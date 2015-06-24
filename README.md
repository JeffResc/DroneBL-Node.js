# DroneBL
DroneBL IP Address Lookup in Node.js

Example Lookup:

First run ```npm install dronebl``` to install the DroneBL package to your system.

```javascript
var DroneBL = require('dronebl');

DroneBL.lookup("8.8.8.8", function(res) {
	if (res.status != 'failure') {
		console.log(res.result); //Returns false since 8.8.8.8 is not listed
	}
});

DroneBL.lookup("213.163.51.164", function(res) {
	if (res.status != 'failure') {
		console.log(res.result); //Returns true since 213.163.51.164 is not listed
	}
});
```
