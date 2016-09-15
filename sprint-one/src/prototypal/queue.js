var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.storage = {};

queueMethods.counter = 0;

queueMethods.key = 0;


queueMethods.enqueue = function(value) {
  this.storage[this.key] = value;
  this.counter++;
  this.key++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }

  var keys = [];
  for (var key in this.storage) {
    keys.push(Number(key));
  }

  var keyToDequeue = keys.sort();
  keyToDequeue = keyToDequeue[0];

  var toDequeue = this.storage[keyToDequeue];
  delete this.storage[keyToDequeue];
  return toDequeue;

};

queueMethods.size = function() {
  return this.counter;
};
