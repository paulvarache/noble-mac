const events = require('events');
const util = require('util');

const binary = require('node-pre-gyp');
const path = require('path');
const binding_path = binary.find(path.resolve(path.join(__dirname,'./package.json')));
const NobleMac = require(binding_path).NobleMac;

util.inherits(NobleMac, events.EventEmitter);

module.exports = new NobleMac();
