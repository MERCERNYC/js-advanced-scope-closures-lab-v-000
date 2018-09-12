function produceDrivingRange(blockRange) {
  //returns a function
  return function(start, finish) {
    const distance = Math.abs(parseInt(start) - parseInt(finish));
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - distance}`
    }
  }
}

// Returns a function that then calculates a tip.

function produceTipCalculator(percentage){
  return function (bill){
    return percentage * bill;
  }
}

function createDriver(){
  let driverId = 0;

   // return class
  return class {
    constructor(name, driver) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
