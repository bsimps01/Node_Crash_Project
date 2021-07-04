const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
    //Call event
    this.emit('message', { id: uuid.v4(), msg })
    }
}

//console.log(uuid.v4());

module.exports = Logger