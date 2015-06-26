var request = require('request');

module.exports = {
    lookup: function(ip, cb) {
	if (ip.indexOf(':') == -1) {
        request('http://' + ip.split(':').reverse().join(':') + '.dnsbl.dronebl.org', function (error, response, body) {
            if (error.code === 'ENOTFOUND') {
                cb('false');
            } else if (error.code === 'ECONNREFUSED') {
                cb('true');
            } else {
                cb('error')
            }
        });
	} else {
	request('http://' + ip.split(':').reverse().join(':') + '.dnsbl.dronebl.org', function (error, response, body) {
	    if (error.code === 'ENOTFOUND') {
		cb('false');
	    } else if (error.code === 'ECONNREFUSED') {
		cb('true');
	    } else {
		cb('error');
	    }
	}
    }
};
