const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
    } else {
      this._insertNode(this._root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._searchNode(this._root, data) !== null;
  }

  find(data) {
    return this._searchNode(this._root, data);
  }

  _searchNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      return this._searchNode(node.left, data);
    } else if (data > node.data) {
      return this._searchNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const minRightNode = this._findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
      return node;
    }
  }

  _findMinNode(node) {
    if (!node.left) {
      return node;
    }
    return this._findMinNode(node.left);
  }

  min() {
    if (!this._root) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

const tree = new BinarySearchTree();

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);

tree.remove(5);

module.exports = {
  BinarySearchTree,
};
