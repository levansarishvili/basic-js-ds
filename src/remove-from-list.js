const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 */
function removeKFromList(l, k) {
  if (!l) {
    return null;
  }

  const dummy = new ListNode();
  dummy.next = l;

  let prev = dummy;
  let current = l;

  while (current) {
    if (current.value === k) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return dummy.next;
}

const l = new ListNode(3);
l.next = new ListNode(1);
l.next.next = new ListNode(2);
l.next.next.next = new ListNode(3);
l.next.next.next.next = new ListNode(4);
l.next.next.next.next.next = new ListNode(5);

const k = 3;
const result = removeKFromList(l, k);

let output = "";
let currentNode = result;
while (currentNode) {
  output += currentNode.value + " -> ";
  currentNode = currentNode.next;
}
output += "null";

module.exports = {
  removeKFromList,
};
