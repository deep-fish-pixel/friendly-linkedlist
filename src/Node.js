function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

Node.prototype.insertAfter = function (node) {
  const oldNext = this.next;
  this.next = node;
  node.prev = this;
  if(oldNext){
    oldNext.prev = node;
    node.next = oldNext;
  }
  return this;
}

Node.prototype.insertBefore = function (node) {
  const oldPrev = this.prev;
  this.prev = node;
  node.next = this;
  if(oldPrev){
    oldPrev.next = node;
    node.prev = oldPrev;
  }
  return this;
}

Node.prototype.replace = function (node) {
  const oldPrev = this.prev;
  const oldNext = this.next;
  if(oldPrev){
    oldPrev.next = node;
    node.prev = oldPrev;
  }
  if(oldNext){
    oldNext.prev = node;
    node.next = oldNext;
  }
  this.prev = null;
  this.next = null;
  return this;
}

Node.prototype.setFirst = function () {
  this.prev = null;
  return this;
}

Node.prototype.setLast = function () {
  this.next = null;
  return this;
}

Node.prototype.remove = function () {
  const { prev, next } = this;
  if(prev) {
    prev.next = next || null;
  }
  if(next) {
    next.prev = prev || null;
  }
  this.prev = null;
  this.next = null;
  return this;
}

module.exports = Node;


