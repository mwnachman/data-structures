var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  


  return someInstance; 

};


var stackMethods = {};

stackMethods.counter = 0;

stackMethods.storage = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
}; 

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  var toPop = this.storage[this.counter];
  delete this.storage[this.counter];
  return toPop;
};

stackMethods.size = function() {
  return this.counter;
};
