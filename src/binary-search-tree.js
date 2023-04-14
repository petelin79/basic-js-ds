const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.obj = null
  }

  root() {
      // console.log(this.obj);
    return this.obj
  }

  add(data) {
      const newNode = new Node(data);
      if (!this.obj) {
        this.obj = newNode;
        return this;
      };
      let current = this.obj;
  
      const addSide = side => {
        if (!current[side]) {
          current[side] = newNode;
          return this;
        };
        current = current[side];
      };
  
      while (true) {
        if (data === current.data) {
          return this;
        };
        if (data < current.data) addSide('left');
        else addSide('right');
      };
    };

  has(data) {
    if (!this.obj) return false;
    let current = this.obj,
        found = false;
  
    while (current && !found) {
      if (data < current.data) current = current.left;
      else if (data > current.data) current = current.right;
      else found = true;
    };
    return found
  }

  find(data) {
    if (!this.obj) return null;
    let current = this.obj,
        found = false;
  
    while (current && !found) {
      if (data < current.data) current = current.left;
      else if (data > current.data) current = current.right;
      else found = true;
    };
  
    if (!found) return null;
    return current;
  }


  remove(data) {
    this.obj = delNode(this.obj, data)

    function delNode(node, data) {
      if (!node) return null
      
      if (data > node.data) {
        node.right = delNode(node.right, data)
        return node;
      }
      else if (data < node.data) {
        node.left = delNode(node.left, data);
        return node;
      }
      else {
        if (!node.left && !node.right) return null

        if (!node.left) {
          node = node.right;
          return node
        }
        if(!node.right) {
          node = node.left;
          return node
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right
        }

        node.data = maxLeft.data
        node.left = delNode(node.left, maxLeft.data)

        return node
      }
    }
  }

  min() {
    if (!this.obj) return null;
    let current = this.obj
    while (current.left) {
        current = current.left;
    }
    return current.data
}

  max() {
    if (!this.obj) return null;
    let current = this.obj
    while (current.right) {
        current = current.right;
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};