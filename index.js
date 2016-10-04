'use strict';

// Requirements
let request = require('request')

// Module object
let DroneBL = {
  resolveIP: (ip) => {
    let ipv4Re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    let ipv6Re = /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/
    if(ip.match(ipv4Re))
      return ip.split('.').reverse().join('.')
    if(ip.match(ipv6Re))
      return ip.split(':').reverse().join(':')
  }
  resolveResponse: (code, cb) => {
    switch (code) {
      case 'ENOTFOUND': cb('false'); break;
      case 'ECONNREFUSED': cb('true'); break;
      default: cb('error'); break;
    }
  },
  lookup: (ip, cb) => {
    request('http://' + DroneBL.resolveIP(ip) + '.dnsbl.dronebl.org', (error, response, body) => {
      DroneBL.resolveResponse(error.code, cb)
    });
  }
}

// Export module
module.exports = DroneBL
