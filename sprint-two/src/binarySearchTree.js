var BinarySearchTree = function(value) {
  this.value = value;
  // this.root = undefined; 
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(value) {
  var node = new BinarySearchTree(value);

  if (node.value > this.value) {
    if (this.right === undefined) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  } else if (node.value < this.value) {
    if (this.left === undefined) {
      this.left = node;
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  
    if (this.value === value) {
      return true;
    }
    else if (value > this.value && this.right) {
      return this.right.contains(value);
    }
    else if (value < this.value && this.left) {
      return this.left.contains(value);
    }
   
   return false; 


};  

  // if (this.value === value) {
  //   return true;
  // } else if (value > this.value) {
  //   if (this.right.value === value) {
  //     return true;
  //   }
  // } else if (value < this.value) {
  //   if (this.left.value === value) {
  //     return true;
  //   }
  // }
  // return false;


BinarySearchTree.prototype.depthFirstLog = function(callback) {
//recursively iterate over all nodes and call a function on them;

  callback(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
