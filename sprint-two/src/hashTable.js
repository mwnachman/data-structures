
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var toPass = [[k, v]]; 
  var toPassWithoutExtraArray = [k, v];
  var doesIt = false; 

  if (bucket !== undefined ) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        var blah = i;
        doesIt = true;
      }
    }
  }

  if (bucket === undefined) {
    bucket = toPass;
  } else if (doesIt) {
    bucket[blah] = toPassWithoutExtraArray;
  } else {
    bucket = bucket.concat(toPass);
  }

  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = undefined;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


