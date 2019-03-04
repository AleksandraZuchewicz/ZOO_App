class Animal {
  constructor(id, kind, name) {
    this.id = id;
    this.kind = kind;
    this.name = name;
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
}
class Traineer extends Employee {
  constructor(id, role, name) {
    super(id, name);
    this.role = role;
  }
}
class ZOO {
  constructor(name) {
    this.name = name;
    this.animals = [];
    this.employees = [];
  }
  addAnimal(animal) {}
  removeAnimal(animal) {}
  showAnimals() {}
  addEmployee(employee) {}
  removeEmployee(employee) {}
  showEmployees() {}
}
let zooSingleton = new ZOO("Wrocławskie Zoo");
