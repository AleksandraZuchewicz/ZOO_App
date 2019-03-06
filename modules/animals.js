let currentId = 0;
let Event;
class Animal {
  constructor(kind, name) {
    this.id = currentId;
    currentId++;
    this.kind = kind;
    this.name = name;
    this.hunger = 100;
    this.tricks = [];
    let newBornAnimal = new Event(
      this.kind + " named " + this.name + " has been born."
    );
    newBornAnimal.emit();
  }
  eat(food) {}
}
class Cat extends Animal {
  constructor(kind, name) {
    super(kind, name);
  }
  eat(meat) {
    let eatMeat = new Event(this.kind + " named " + this.name + " ate " + meat);
    eatMeat.emit();
    this.hunger = 100;
  }
}
class Tiger extends Cat {
  constructor(name) {
    super("Tiger", name);
  }
}
class Lion extends Cat {
  constructor(name) {
    super("Lion", name);
  }
}
class Monkey extends Animal {
  constructor(kind, name) {
    super(kind, name);
  }
  eat(fruit) {
    let eatFruit = new Event(
      this.kind + " named " + this.name + " ate " + fruit
    );
    eatFruit.emit();
    this.hunger = 100;
  }
}
class Baboon extends Monkey {
  constructor(name) {
    super("Baboon", name);
  }
}
class Chimpanzee extends Monkey {
  constructor(name) {
    super("Chimpanzee", name);
  }
}
module.exports = function(event) {
  Event = event;

  return {
    Animal: Animal,
    Cat: Cat,
    Tiger: Tiger,
    Lion: Lion,
    Monkey: Monkey,
    Baboon: Baboon,
    Chimpanzee: Chimpanzee
  };
};
