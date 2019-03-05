let Event;
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
module.exports = function(event) {
  Event = event;
  return {
    FRUITS: FRUITS,
    MEATS: MEATS,
    TRICK_NAMES: TRICK_NAMES,
    tricks: tricks
  };
};
