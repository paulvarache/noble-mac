const events = require('events');
const util = require('util');

const NobleMac = require('../build/Release/noble_mac_native').NobleMac;

util.inherits(NobleMac, events.EventEmitter);

module.exports = new NobleMac();
