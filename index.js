var request = require('request');

module.exports = {
    lookup: function(ip, cb) {
        var bytes = ip.split(".");
        request('http://' + bytes[3] + '.' + bytes[2] + '.' + bytes[1] + '.' + bytes[0] + '.dnsbl.dronebl.org', function (error, response, body) {
            if (error.code == 'ENOTFOUND') {
                cb('false');
            } else if (error.code == 'ECONNREFUSED') {
                cb('true');
            } else {
                cb('error')
            }
        });
    }
}
