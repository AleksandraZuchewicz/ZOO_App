let zooSingleton;
class Event {
  constructor(eventDesc) {
    this.eventDesc = eventDesc;
  }
  emit() {
    zooSingleton.events.push(this.eventDesc);
  }
}
module.exports = function(zoo) {
  zooSingleton = zoo;
  return Event;
};
