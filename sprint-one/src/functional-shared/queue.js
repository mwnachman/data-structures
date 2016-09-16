var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};

  someInstance.counter = 0;

  someInstance.key = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }

  var numberedKeys = [];
  for (var key in this.storage) {
    numberedKeys.push(Number(key));
  }

  var keyToRemove = numberedKeys.sort();
  var keyToRemove = keyToRemove[0];

  var toDequeue = this.storage[keyToRemove];
  delete this.storage[keyToRemove];
  return toDequeue;
};

queueMethods.size = function() {
  return this.counter;
};


