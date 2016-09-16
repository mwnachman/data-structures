 

// Instantiate a new graph
var Graph = function() {

  this.Nodes = [];
  this.Edges = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this.Nodes.push({id: node});

  // this.Nodes.push({'id': node});

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for (var i = 0; i < this.Nodes.length; i++) {
    if (this.Nodes[i].id === node) {
      return true;
    }
  } 
  return false;

  // for (var i = 0; i < this.Nodes.length; i++) {
  //   if (this.Nodes[i]['id'] === node) {
  //     return true;
  //   } 
  // }
  // return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var i = 0; i < this.Nodes.length; i++) {
    if (this.Nodes[i].id === node) {
      this.Nodes.splice(i, 1);
    }
  }
  for (var i = 0; i < this.Edges.length; i++) {
    if (this.Edges[i].fromNode === node || this.Edges[i].toNode === node) {
      this.Edges.splice(i, 1);
    }
  }

  // for (var i = 0; i < this.Nodes.length; i++) {

  //   console.log(this.Nodes[i]);
  //   if (this.Nodes[i].id === node) {
  //     this.Nodes.splice(i, 1);
  //     console.log(this.Nodes);
  //   }
  // }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.Edges.length; i++) {
    // console.log(this.Edges[i]);
    // debugger;
    // console.log(this.Edges[i].fromNode);
    // console.log(this.Edges[i].toNode);
    if ((this.Edges[i].fromNode === fromNode && this.Edges[i].toNode === toNode) ||
        (this.Edges[i].toNode === fromNode && this.Edges[i].fromNode === toNode)) {
      return true;
    }
  }
  return false;


};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.Edges.push({fromNode: fromNode, toNode: toNode});

  // this.Edges.fromNode = toNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.Edges.length; i++) {
    console.log(this.Edges[i]);
    if ((this.Edges[i].fromNode === fromNode && this.Edges[i].toNode === toNode) || 
      (this.Edges[i].toNode === fromNode && this.Edges[i].fromNode === toNode)) {
      this.Edges.splice(i, 1);
    }
  }

  // if (this.Nodes.hasEdge(fromNode, toNode)) {
  //   delete this.Edges.fromNode;
  //   delete this.Edges.toNode;
  // }
  // if (this.Edges.fromNode === toNode) {
  //   delete this.Edges.fromNode;
  // } else if (this.Edges.toNode === fromNode) {
  //   delete this.Edges.toNode;
  // }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.Nodes.length; i++) {
    cb(this.Nodes[i].id);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


