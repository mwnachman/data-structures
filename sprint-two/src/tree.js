var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
 
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {

  var result = false;

  var searchNodes = function(node) {
    if (node.value === target) {
      result = true;
    }
    for (var i = 0; i < node.children.length; i++) {
      searchNodes(node.children[i]);
    }
  };

  searchNodes(this);

  return result;


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
