'use strict';

// Requirements
let request = require('request')

// Module object
let DroneBL = {
  resolveResponse: (code, cb) => {
    switch (code) {
      case 'ENOTFOUND': cb('false'); break;
      case 'ECONNREFUSED': cb('true'); break;
      default: cb('error'); break;
    }
  },
  lookup: (ip, cb) => {
    if (ip.indexOf(':') == -1) {
      request('http://' + ip.split(':').reverse().join(':') + '.dnsbl.dronebl.org', (error, response, body) => {
        DroneBL.resolveResponse(error.code, cb)
      });
    } else {
      request('http://' + ip.split(':').reverse().join(':') + '.dnsbl.dronebl.org', (error, response, body) => {
        DroneBL.resolveResponse(error.code, cb)
      })
    }
  }
}

// Export module
module.exports = DroneBL
