var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};

  this.counter = 0;

  this.key = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.counter++;
  this.key++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }

  var keys = [];
  for (var key in this.storage) {
    keys.push(Number(key));
  }
  var sortedKey = keys.sort();
  sortedKey = sortedKey[0];
  var toDequeue = this.storage[sortedKey];
  delete this.storage[sortedKey];
  return toDequeue;
};

Queue.prototype.size = function() {
  return this.counter;
};
