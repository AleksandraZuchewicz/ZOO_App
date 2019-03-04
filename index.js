let FRUITS = {
  BANANA: "Banana",
  GRAPES: "Grapes"
};
let MEATS = {
  PORK: "Pork",
  CHICKEN: "Chicken"
};
let TRICK_NAMES = {
  CLAP: "clap",
  SIT: "sit",
  HOP: "hop"
};
let tricks = {
  clap: function() {
    let trickClap = new Event(this.kind + " named " + this.name + " clapped.");
    trickClap.emit();
  },
  sit: function() {
    let trickSit = new Event(this.kind + " named " + this.name + " sat.");
    trickSit.emit();
  },
  hop: function() {
    let trickHop = new Event(this.kind + " named " + this.name + " hopped.");
    trickHop.emit();
  }
};
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
    let eatMeat = new Event(this.kind + " named " + this.name + " ate " + meat);
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
    let eatFruit = new Event(
      this.kind + " named " + this.name + " ate " + fruit
    );
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
class Trainer extends Employee {
  constructor(id, name) {
    super(id, name);
    this.role = "Trainer";
  }
  train(animal, trick) {
    animal[trick] = tricks[trick];
  }
}
class ZOO {
  constructor(name) {
    this.name = name;
    this.animals = [];
    this.employees = [];
    this.events = [];
  }
  addAnimal(animal) {
    this.animals.push(animal);
  }
  removeAnimal(animal) {}
  showAnimals() {
    return this.animals;
  }
  addEmployee(employee) {}
  removeEmployee(employee) {}
  showEmployees() {}
}
let zooSingleton = new ZOO("Wrocławskie Zoo");
let baboonMax = new Baboon(1, "Baboon", "Max");
zooSingleton.addAnimal(baboonMax);
baboonMax.eat(FRUITS.BANANA);
let trainerMark = new Trainer(1, "Mark");
trainerMark.train(baboonMax, TRICK_NAMES.HOP);
baboonMax.hop();
console.log(zooSingleton.animals);
console.log(zooSingleton.events);
//Unit tests
function testMonkeyEat() {
  let newMonkey = new Monkey(99, "Baboon", "Rex");
  newMonkey.eat(FRUITS.GRAPES);
  const lastEventIndex = zooSingleton.events.length - 1;
  // assertion
  if (zooSingleton.events[lastEventIndex] == "Baboon named Rex ate Grapes") {
    console.log("testMonkeyEat passed");
  } else {
    console.log("testMonkeyEat failed");
  }
}
testMonkeyEat();
