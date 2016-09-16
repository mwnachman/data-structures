var Queue = function() {
  var someInstance = {};

<<<<<<< HEAD
  

=======
  var counter = 0;

  var key = 0;
>>>>>>> cb859f957777a3983e9aa67aae224ed4885c62c6
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
<<<<<<< HEAD

=======
    return counter;
>>>>>>> cb859f957777a3983e9aa67aae224ed4885c62c6
  };


};
