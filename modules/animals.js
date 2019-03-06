let Event;
class Animal {
  constructor(id, kind, name) {
    this.id = id;
    this.kind = kind;
    this.name = name;
    this.hunger = 100;
    let newBornAnimal = new Event(
      this.kind + " named " + this.name + " has been born."
    );
    newBornAnimal.emit();
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
    this.hunger = 100;
  }
}
class Tiger extends Cat {
  constructor(id, name) {
    super(id, "Tiger", name);
  }
}
class Lion extends Cat {
  constructor(id, name) {
    super(id, "Lion", name);
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
    this.hunger = 100;
  }
}
class Baboon extends Monkey {
  constructor(id, name) {
    super(id, "Baboon", name);
  }
}
class Chimpanzee extends Monkey {
  constructor(id, name) {
    super(id, "Chimpanzee", name);
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
