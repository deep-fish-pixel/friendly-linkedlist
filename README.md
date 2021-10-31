# friendly-linkedlist
Supply Linkedlist stardard and more useful Methods

### Install
Install with npm:

`$ npm install --save friendly-linkedlist`


### Uses

```angular2html
const LinkedList = require('friendly-linkedlist');

const linkedList = new LinkedList([1, 2, 3, 4, 5]);
linkedList.getFirst();
```


### Methods
*   [`constructor(array)`](#constructor) Create a LinkedList, array can be null.
*   [`.add(value, index)`](#add) Inserts the specified value at the specified position in this list
*   [`.addAll(array, index)`](#addAll) Appends all of the values in the specified collection to the end of this list, in the order that they are returned by the specified array list
*   [`.addFirst()`](#addFirst) Inserts the specified value at the beginning of this list.
*   [`.addLast()`](#addLast) Appends the specified value to the end of this list.
*   [`.set(value, index)`](#set) Replaces the node value at the specified position in this list with the specified value.
*   [`.push()`](#push) Pushes an value onto the stack represented by this list.
*   [`.getFirst()`](#getFirst) Returns the first node value in this list.
*   [`.getLast()`](#getLast) Returns the last node value in this list.
*   [`.indexOf(value)`](#indexOf) Returns the index of the first occurrence of the specified node value in this list, or -1 if this list does not contain the node value.
*   [`.lastIndexOf()`](#lastIndexOf) Returns the index of the last occurrence of the specified node value in this list, or -1 if this list does not contain the node value.
*   [`.getNode(index)`](#getNode) Returns the specified position node in this list.
*   [`.getFirstNode()`](#getFirstNode) Returns the first node in this list.
*   [`.getLastNode()`](#getLastNode) Returns the last node in this list.
*   [`.indexOfNode(node)`](#indexOfNode) Returns the index of the first occurrence of the specified node in this list, or -1 if this list does not contain the node.
*   [`.lastIndexOfNode()`](#lastIndexOfNode) Returns the index of the last occurrence of the specified node in this list, or -1 if this list does not contain the node.
*   [`.remove(index)`](#remove) Removes the node at the specified position in this list.
*   [`.removeFirst()`](#removeFirst) Removes and returns the first node from this list.
*   [`.removeLast()`](#removeLast) Removes and returns the last node from this list.
*   [`.pop()`](#pop) Pops an node from the stack represented by this list.
*   [`.removeIndexOf(value)`](#removeIndexOf) Removes the first occurrence of the specified node value in this list (when traversing the list from head to tail).
*   [`.removeIndexOfNode(node)`](#removeIndexOfNode) Removes the first occurrence of the specified node in this list (when traversing the list from head to tail).
*   [`.removeFirstIndexOf(value)`](#removeFirstIndexOf) Removes the first occurrence of the specified node value in this list (when traversing the list from head to tail).
*   [`.removeFirstIndexOfNode(node)`](#removeFirstIndexOfNode) Removes the first occurrence of the specified node value in this list (when traversing the list from head to tail).
*   [`.removeLastIndexOf(value)`](#removeLastIndexOf) Removes the last occurrence of the specified node value in this list (when traversing the list from head to tail).
*   [`.removeLastIndexOfNode(node)`](#removeLastIndexOfNode) Removes the last occurrence of the specified node in this list (when traversing the list from head to tail).
*   [`.size()`](#size) Returns the number of nodes in this list.
*   [`.add()`](#add) Returns true if this list contains the specified node value.
*   [`.contains(value)`](#contains) Returns true if this list contains the specified node value.
*   [`.containsNode(node)`](#containsNode) Returns true if this list contains the specified node.
*   [`.clone()`](#clone) Returns a deep copy of this LinkedList.
*   [`.toArray()`](#toArray) Returns an array containing all of the nodes in this list in proper sequence (from first to last node).


