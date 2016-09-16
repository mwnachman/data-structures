var Stack = function() {
  var someInstance = {};

  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() { 
    
    if (counter > 0) {
      counter--;
    }

    var toPop = storage[counter];
    delete storage[counter];

    return toPop;

  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;

};
