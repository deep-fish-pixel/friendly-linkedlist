const Node = require('./Node');
const isNumber  = require('./isNumber');

/**
 * Create a LinkedList, array can be null.
 * @param array
 * @constructor
 */
function LinkedList(array) {
  this.firstNode = null;
  this.lastNode = null;
  this.count = 0;
  if (array) {
    this.addAll(array, 0);
  }
}

/**
 * Inserts the specified value at the specified position in this list
 * @param value
 * @param index
 * @returns {boolean} add success or false
 */
LinkedList.prototype.add = function (value, index) {
  const { firstNode, lastNode, count } = this;
  if (!isNumber(index) || (index > count && index < 0)) {
    return false;
  }
  const node = new Node(value);
  if(firstNode && lastNode){
    if (index === count) {
      lastNode.insertAfter(node);
      this.lastNode = node;
      this.count++;
    } else {
      const currentNode = this.getNode(index);
      if (currentNode) {
        currentNode.insertBefore(node);
        this.count++;
        if (index === 0) {
          this.firstNode = node;
        }
      }
    }
  } else if(index === 0){
    this.firstNode = this.lastNode = node;
    this.count++;
  }
  return count !== this.count;
}

/**
 * Appends all of the values in the specified collection to the end of this list, in the order that they are returned by the specified array list
 * @param array
 * @param index
 * @returns {boolean} add success or false
 */
LinkedList.prototype.addAll = function (array, index) {
  let result = false;
  array.forEach((value, i) => {
    result = this.add(value, index + i);
  });
  return result;
}

/**
 * Inserts the specified value at the beginning of this list.
 * @param value
 * @returns {boolean} add success or false
 */
LinkedList.prototype.addFirst = function (value) {
  return this.add(value, 0);
}

/**
 * Appends the specified value to the end of this list.
 * @param value
 * @returns {boolean} add success or false
 */
LinkedList.prototype.addLast = function (value) {
  return this.add(value, this.count);
}

/**
 * Replaces the node value at the specified position in this list with the specified value.
 * @param value
 * @param index
 * @returns {boolean} replace success or false
 */
LinkedList.prototype.set = function (value, index) {
  const { firstNode, lastNode, count } = this;
  if (!isNumber(index) || index >= count || index < 0) {
    return false;
  }
  const node = new Node(value);
  if(firstNode && lastNode){
    const currentNode = this.getNode(index);
    if (currentNode) {
      currentNode.replace(node);
      if(firstNode === currentNode){
        this.firstNode = node;
      }
      if(lastNode === currentNode){
        this.lastNode = node;
      }
      return true;
    }
  }
  return false;
}

/**
 * Pushes an value onto the stack represented by this list.
 * @param value
 * @returns {boolean} push success or false
 */
LinkedList.prototype.push = function (value){
  return this.addLast(value);
}

/**
 * Returns the specified position node in this list.
 * @returns {Node} get a node
 */
LinkedList.prototype.getNode = function (index) {
  const { firstNode, count } = this;

  if(index >= count){
    return null;
  }
  let node = firstNode;

  while(index > -1){
    if (index === 0) {
      return node;
    }
    if (node) {
      node = node.next;
      index--;
    } else {
      return null;
    }
  }
  return null;
}


/**
 * Returns the first node in this list.
 */
LinkedList.prototype.getFirstNode = function () {
  return this.firstNode;
}

/**
 * Returns the last node in this list.
 */
LinkedList.prototype.getLastNode = function () {
  return this.lastNode;
}

/**
 * Returns the first node value in this list.
 */
LinkedList.prototype.getFirst = function () {
  return this.firstNode ? this.firstNode.value : undefined;
}

/**
 * Returns the last node value in this list.
 */
LinkedList.prototype.getLast = function () {
  return this.lastNode ? this.lastNode.value : undefined;
}

/**
 * Returns the index of the first occurrence of the specified node value in this list, or -1 if this list does not contain the node value.
 */
LinkedList.prototype.indexOf = function (value) {
  let node = this.firstNode;
  let count = 0;
  while (node){
    if(node.value === value){
      return count;
    } else {
      count++;
      node = node.next;
    }
  }
  return -1;
}

/**
 * Returns the index of the first occurrence of the specified node in this list, or -1 if this list does not contain the node.
 */
LinkedList.prototype.indexOfNode = function (node) {
  let firstNode = this.firstNode;
  let count = 0;
  while (firstNode){
    if(firstNode === node){
      return count;
    } else {
      count++;
      firstNode = firstNode.next;
    }
  }
  return -1;
}

/**
 * Returns the index of the last occurrence of the specified node value in this list, or -1 if this list does not contain the node value.
 */
LinkedList.prototype.lastIndexOf = function (value) {
  let node = this.lastNode;
  let count = 0;
  while (node){
    if(node.value === value){
      return this.count - count - 1;
    } else {
      count++;
      node = node.prev;
    }
  }
  return -1;
}


/**
 * Returns the index of the last occurrence of the specified node in this list, or -1 if this list does not contain the node.
 */
LinkedList.prototype.lastIndexOfNode = function (node) {
  let lastNode = this.lastNode;
  let count = 0;
  while (lastNode){
    if(lastNode === node){
      return this.count - count - 1;
    } else {
      count++;
      lastNode = lastNode.prev;
    }
  }
  return -1;
}

/**
 * Removes the node at the specified position in this list.
 * @param index
 * @returns {object} remove node
 */
LinkedList.prototype.remove = function (index) {
  const node = this.getNode(index);
  if (node) {
    if(index === 0) {
      this.firstNode = node.next;
      if (this.firstNode) {
        this.firstNode.setFirst();
      }
    }
    if(index === this.count - 1) {
      this.lastNode = node.prev;
      if(this.lastNode){
        this.lastNode.setLast();
      }
    }
    node.remove();
    this.count--;
    return node;
  }
}

/**
 * Removes and returns the first node from this list.
 * @returns {object} remove node
 */
LinkedList.prototype.removeFirst = function () {
  return this.remove(0);
}
/**
 * Removes and returns the last node from this list.
 * @returns {object} remove node
 */
LinkedList.prototype.removeLast = function () {
  return this.remove(this.count - 1);
}

/**
 * Pops an node from the stack represented by this list.
 * @returns {object} remove node
 */
LinkedList.prototype.pop = function () {
  return this.removeLast();
}

/**
 * Removes the first occurrence of the specified node value in this list (when traversing the list from head to tail).
 * @param value
 * @returns {object} remove node
 */
LinkedList.prototype.removeIndexOf = function (value) {
  const index = this.indexOf(value);
  if (index >= 0) {
    return this.remove(index);
  }
}

/**
 * Removes the first occurrence of the specified node in this list (when traversing the list from head to tail).
 * @param node
 * @returns {object} remove node
 */
LinkedList.prototype.removeIndexOfNode = function (node) {
  const index = this.indexOfNode(node);
  if (index >= 0) {
    return this.remove(index);
  }
}

/**
 * Removes the first occurrence of the specified node value in this list (when traversing the list from head to tail).
 * @param value
 * @returns {object} remove node
 */
LinkedList.prototype.removeFirstIndexOf = function (value) {
  return this.removeIndexOf(value);
}

/**
 * Removes the first occurrence of the specified node value in this list (when traversing the list from head to tail).
 * @param node
 * @returns {object} remove node
 */
LinkedList.prototype.removeFirstIndexOfNode = function (node) {
  return this.removeIndexOfNode(node);
}

/**
 * Removes the last occurrence of the specified node value in this list (when traversing the list from head to tail).
 * @param value
 * @returns {object} remove node
 */
LinkedList.prototype.removeLastIndexOf = function (value) {
  const index = this.lastIndexOf(value);
  if (index >= 0) {
    return this.remove(index);
  }
}

/**
 * Removes the last occurrence of the specified node in this list (when traversing the list from head to tail).
 * @param node
 * @returns {object} remove node
 */
LinkedList.prototype.removeLastIndexOfNode = function (node) {
  const index = this.lastIndexOfNode(node);
  if (index >= 0) {
    return this.remove(index);
  }
}

/**
 * Returns the number of nodes in this list.
 */
LinkedList.prototype.size = function () {
  return this.count;
}

/**
 * Returns true if this list contains the specified node value.
 */
LinkedList.prototype.contains = function (value) {
  const index = this.indexOf(value);
  return index >= 0;
}

/**
 * Returns true if this list contains the specified node.
 */
LinkedList.prototype.containsNode = function (node) {
  const index = this.indexOfNode(node);
  return index >= 0;
}


/**
 * Returns a deep copy of this LinkedList.
 */
LinkedList.prototype.clone = function () {
  return new LinkedList(this.toArray());
}

/**
 * Returns an array containing all of the nodes in this list in proper sequence (from first to last node).
 */
LinkedList.prototype.toArray = function () {
  const values = [];
  let node = this.firstNode;
  while (node) {
    values.push(node.value);
    node = node.next;
  }
  return values;
}

module.exports = LinkedList;
