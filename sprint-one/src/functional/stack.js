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

<<<<<<< HEAD


=======
  someInstance.pop = function() {
    if (counter > 0) {
      counter--;
    }
    var toPop = storage[counter];
    delete storage[counter];
    return toPop;
>>>>>>> cb859f957777a3983e9aa67aae224ed4885c62c6
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;

};
