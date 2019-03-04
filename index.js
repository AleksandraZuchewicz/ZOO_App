class Event {
  constructor(eventDesc) {
    this.eventDesc = eventDesc;
  }
  emit() {
    zooSingleton.events.push(this.eventDesc);
  }
}
class Animal {
  constructor(id, kind, name) {
    this.id = id;
    this.kind = kind;
    this.name = name;
  }
  eat(food) {}
}
class Cat extends Animal {
  constructor(id, kind, name) {
    super(id, kind, name);
  }
  eat(meat) {
    let eatMeat = new Event(kind + " named " + name + " ate " + meat);
    eatMeat.emit();
  }
}
class Tiger extends Cat {
  constructor(id, kind, name) {
    super(id, kind, name);
  }
}
class Lion extends Cat {
  constructor(id, kind, name) {
    super(id, kind, name);
  }
}
class Monkey extends Animal {
  constructor(id, kind, name) {
    super(id, kind, name);
  }
  eat(fruit) {
    let eatFruit = new Event(kind + " named " + name + " ate " + fruit);
    eatFruit.emit();
  }
}
class Baboon extends Monkey {
  constructor(id, kind, name) {
    super(id, kind, name);
  }
}
class Chimpanzee extends Monkey {
  constructor(id, kind, name) {
    super(id, kind, name);
  }
}
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
class Feeder extends Employee {
  constructor(id, role, name) {
    super(id, name);
    this.role = role;
  }
  feed(animal) {}
}
class Traineer extends Employee {
  constructor(id, role, name) {
    super(id, name);
    this.role = role;
  }
  train(animal, trick) {}
}
class ZOO {
  constructor(name) {
    this.name = name;
    this.animals = [];
    this.employees = [];
    this.events = [];
  }
  addAnimal(animal) {}
  removeAnimal(animal) {}
  showAnimals() {}
  addEmployee(employee) {}
  removeEmployee(employee) {}
  showEmployees() {}
}
let zooSingleton = new ZOO("Wrocławskie Zoo");
