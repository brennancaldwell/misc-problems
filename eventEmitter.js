/*
var eventEmitter = new EventEmitter();

function responseToEvent(msg) {
    console.log(msg);
}

function response2(msg2){
  console.log(msg2 + ' also!')
}

eventEmitter.on('HRX', responseToEvent);

eventEmitter.once('HRX', function(msg) { console.log(msg + ' just once!'); });

eventEmitter.emit('HRX', '1st'); // 1st \n 1st just once!

eventEmitter.on('HRX', response2);

eventEmitter.emit('HRX', '2nd'); // 2nd \n 2nd also!

eventEmitter.off('HRX', responseToEvent);

eventEmitter.emit('HRX', '3rd'); // 3rd also!

eventEmitter.emit('HRX', '1st'); // 1st also!

*/

class EventEmitter {
  constructor() {
    this.events = {};
    this.onceFuncs = {};
  }

  on(event, func) {
    this.events[event] = this.events[event] || [];
    this.events[event].forEach(existingFunc => {
      if (existingFunc === func) {
        return;
      }
    })
    this.events[event].push(func);
  }

  emit(event, ...args) {
    if (this.events[event] === undefined) {
      return;
    }
    this.events[event].forEach(func => {
      func(...args);
    })
    if (this.onceFuncs[event]) {
      this.onceFuncs[event].forEach(func => {
        const array = this.events[event];
        for (let i = 0; i < array.length; i++) {
          if (func === array[i]) {
            this.events[event].splice(i, 1);
          }
        }
      });
      delete this.onceFuncs[event];
    }
  }

  off(event, func) {
    const array = this.events[event];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === func) {
        this.events[event].splice(i, 1);
      }
    }
  }

  once(event, func) {
    this.on(event, func);
    this.onceFuncs[event] = this.onceFuncs[event] ? this.onceFuncs[event].push(func) : [func];
  }
}