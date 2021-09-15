class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length > 0) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length += 1;
    return newNode;
  }
  pop() {
    if (!this.length) {
      return null;
    } else {
      let lastNode = this.head;
      let secondLastNode = this.head;
      while (lastNode.next) {
        secondLastNode = lastNode;
        lastNode = lastNode.next;
      }

      secondLastNode.next = null;
      this.tail = secondLastNode;
      this.length -= 1;

      if (!this.length) {
        this.head = null;
        this.tail = null;
      }

      return lastNode;
    }
  }

  // n -> N1 -> N2 -> N3
  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;
    return newNode;
  }

  shift() {
    if (!this.length) {
      return null;
    } else {
      const nodeToRemove = this.head;
      this.head = this.head.next;
      this.length -= 1;
      if (!this.length) {
        this.tail = null;
      }
      return nodeToRemove;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let count = 0;
      while (count < index) {
        currentNode = currentNode.next;
        count += 1;
      }
      return currentNode;
    }
  }

  set(index, value) {
    const currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return currentNode;
    } else {
      return null;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      const preDesiredPlace = this.get(index - 1);
      const newNode = new Node(value);
      newNode.next = preDesiredPlace.next;
      preDesiredPlace.next = newNode;
      this.length += 1;
      return newNode;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const preNodeToRemove = this.get(index - 1);
      const nodeToRemove = preNodeToRemove.next;
      preNodeToRemove.next = nodeToRemove.next;
      this.length -= 1;
      
      return nodeToRemove;
    }
  }
}

const newSinglyLinkedList = new SinglyLinkedList();
newSinglyLinkedList.push("Node 1");
newSinglyLinkedList.push("Node 2");
newSinglyLinkedList.push("Node 3");
newSinglyLinkedList.push("Node 4");
newSinglyLinkedList.push("Node 5");
newSinglyLinkedList.push("Node 6");
newSinglyLinkedList.push("Node 7");

const poppedNode = newSinglyLinkedList.pop();

console.log("poppedNode: ", poppedNode);
console.log(newSinglyLinkedList);
