// 1) Convert the code below using any lib of your choice to be more readable

class DatabaseEvents {
  constructor() {
    this.eventsByName = {};
  }

  on(eventName, callback) {
    const registeredEvents = this.eventsByName[eventName] || [];
    registeredEvents.push(callback);
    this.eventsByName[eventName] = registeredEvents;
  }

  trigger(eventName, data) {
    const registeredEvents = this.eventsByName[eventName] || [];
    registeredEvents.forEach((callback) => {
      callback.apply(this, data);
    });
  }

  off(eventName) {
    delete this.eventsByName[eventName];
  }
}

const cleaner = () => {
  const db = new DatabaseEvents();
  db.on('getData', function () {
    console.log('getData was triggered');

    const data = {
      a: 'teste',
      b: 1111,
    };

    this.trigger('processData', data);
  });

  db.on('processData', function (data) {
    console.log('processData was triggered');

    this.trigger('saveData', data);
  });

  db.on('saveData', function (data) {
    console.log('saveData was triggered');

    console.log('finished');
  });

  try {
    db.trigger('getData');
  } catch (err) {
    console.log(err);
  }
};

module.exports = cleaner;
