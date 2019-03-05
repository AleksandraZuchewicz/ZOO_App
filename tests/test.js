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
