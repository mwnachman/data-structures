var Queue = function() {
  var someInstance = {};

  var counter = 0;

  var key = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
    counter++;
  };

  someInstance.dequeue = function() {

    if (counter > 0) {  
      counter--;
    }

    var numberedKeys = [];
    for (var key in storage) {
      numberedKeys.push(Number(key));
    }
    var keyToRemove = numberedKeys.sort();
    var keyToRemove = keyToRemove[0];
    console.log(keyToRemove);
    var valToDequeue = storage[keyToRemove];
    delete storage[keyToRemove];
    return valToDequeue;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
