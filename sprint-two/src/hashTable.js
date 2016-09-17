//

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // debugger;

  var index = getIndexBelowMaxForKey(k, this._limit);

  var toPass; 

   if (this._storage[index] === undefined) {
    toPass = [[k, v]];
   } else {
    toPass = [k, v];
   }


  // var tuple = [[k, v]];
  // console.log(tuple);
  // var temp = this._storage[index] = [];
  // If masterstorage[index] === undefined, then masterstorage[index] = [];
  // If masterstorage[index], then masterstorage[index].push([k, v])

  // LimitedArray.storage

  // console.log('index in insert before set', index);
  // console.log('storage in insert before set', this._storage);
  this._storage.set(index, toPass);

  // console.log(this._storage[index][0], this._storage[index][1]);
  // console.log('index in insert after set', index);
  // console.log('storage in insert after set', this._storage);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('index in retrieve', index);
  // console.log('storage in retrieve', this._storage);



  return this._storage.get(index[1]);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('index in remove before remove', index);
  // this.insert(k, undefined);
  this._storage.set(index, undefined);
  // console.log('index in remove after remove', index, this._storage);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


