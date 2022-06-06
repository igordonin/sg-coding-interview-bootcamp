// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.eventsByName = {};
  }

  // Register an event handler
  on(eventName, callback) {
    const registeredEvents = this.eventsByName[eventName] || [];
    registeredEvents.push(callback);
    this.eventsByName[eventName] = registeredEvents;
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const registeredEvents = this.eventsByName[eventName] || [];
    registeredEvents.forEach((callback) => {
      callback();
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.eventsByName[eventName];
  }
}

module.exports = Events;
