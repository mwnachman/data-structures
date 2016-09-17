var BinarySearchTree = function(value) {
  this.value = value;
  // this.root = undefined; 
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(value) {
  var node = new BinarySearchTree(value);

  //recursive function:
  // if (node.root === undefined) {
  //   node.root = this.value;
  // }

  // if (value > node.root) {
  //   console.log('true', value);
  //   if (this.right === undefined) {
  //     this.right = node;
  //   } 
  //   else if (this.right !== undefined) {
  //     if (value > this.right.value) {
  //       if (this.right.right === undefined) {
  //         this.right.right = node;
  //         node.root = this.right.value;
  //       } 
  //     } 
  //     else if (value < this.right.value) {
  //       if (this.right.left === undefined) {
  //         this.right.left = node;
  //         node.root = this.right.value;
  //       }
  //     }
  //   }

  // } else if (value < node.root) {
  //   console.log('true less than', value)
  //   if (this.left === undefined) {
  //     this.left = node;
  //     console.log('this.left', this.left)
  //   } else if (this.left !== undefined) {
  //     if (value > this.left.value) {
  //       if (this.left.right === undefined) {
  //         this.left.right = node;
  //         console.log('this.left.right', this.left.right)
  //       } 
  //     } else if (value < this.left.value) {
  //       if (this.left.left === undefined) {
  //         this.left.left = node;
  //         console.log('this.left.left', this.left.left)
  //       }
  //     }
  //   } 
  // }
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
  } else if (value > this.value) {
    if (this.right.value === value) {
      return true;
    }
  } else if (value < this.value) {
    if (this.left.value === value) {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
//recursively iterate over all nodes and call a function on them;
  
//pass over each value
//callback of each value
// node = node || this;

// var recursiveFunction = function(node) {
//   if (this.value !== undefined) {
//     callback(node.value);
//     if (this.left !== undefined) {
//       recursiveFunction(this.left);
//     } if (this.right !== undefined) {
//       recursiveFunction(this.right);
//     }
// } 
// }
// recursiveFunction(this);

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
