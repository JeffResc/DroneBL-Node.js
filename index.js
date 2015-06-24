var request = require('request');

module.exports = {
    lookup: function(ip, cb) {
        var bytes = ip.split(".");
        var byte0 = bytes[0];
		var byte1 = bytes[1];
		var byte2 = bytes[2];
		var byte3 = bytes[3];
		if (typeof byte0 == 'undefined' || typeof byte1 == 'undefined' || typeof byte2 == 'undefined' || typeof byte3 == 'undefined') {
			var obj = {
				"status": "failure",
				"message": "IPv4 Address is Not Properly Formatted"
			}
		} else {
			request('http://' + byte3 + '.' + byte2 + '.' + byte1 + '.' + byte0 + '.dnsbl.dronebl.org', function (error, response, body) {
				if (error.code == 'ENOTFOUND') {
					var obj = {
						"status": "success",
						"result": "false"
					}
				} else if (error.code == 'ECONNREFUSED') {
					var obj = {
						"status": "success",
						"result": "true"
					}
				} else {
						"status": "failure",
						"message": "Unknown error""
				}
			});
		}
		cb(obj);
    }
}
