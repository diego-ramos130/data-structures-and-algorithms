'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = {
      value: head,
      next: null,
    };
  }

  append(value) {
    // o(n), has to run through as many nodes as are in the LL.
    let nodeTraversal = this.head;
    while (nodeTraversal.next) {
      nodeTraversal = nodeTraversal.next;
    }
    nodeTraversal.next = new Node(value);
  }

  remove(offset) {
    // o(n), has to run through however many nodes as offset specifies.
    let counter = 0;
    let checkingNode = this.head;
    let checkedNode = null;
    if (offset === 0) {
      this.head = checkingNode.next;
      checkingNode = null;
    } else {
      while (counter < offset) {
        checkedNode = checkingNode;
        checkingNode = checkingNode.next;
        counter += 1;
      }
      checkedNode.next = checkingNode.next;
      checkingNode = null;
    }
    return this.head;
  }

  prepend(value) {
    // O(1), you only have to access the first node. 
    const save = this.head;
    this.head = new Node(value);
    this.head.next = save;
  }

  reverse() {
    // O(n), has to traverse every node in order to reverse the entire linked list.
    let currentNode = this.head;
    let nextNode = null;
    let prev = null;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = nextNode;
    }
    this.head = prev;
  }
}
