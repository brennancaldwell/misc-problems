/*
706. Design HashMap: https://leetcode.com/problems/design-hashmap/

Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value
already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if
this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the
mapping for the key.
*/

const Node = (key, val) => {
  const node = {};
  node.key = key;
  node.val = val;
  node.next = null;
  return node;
}

const MyHashMap = () => {
  const map = Object.create(MyHashMap.prototype);
  map.head = null;
  map.size = 0;
  return map;
}

MyHashMap.prototype.put = (key, value) => {
  if (!this.head) {
    this.head = Node(key, value);
    this.size++;
    return;
  }

  if (this.head.key === key) {
    this.head.val = value;
    return;
  }

  let node = this.head;

  while (node.next !== null) {
    if (node.next.key === key) {
      node.next.val = value;
      return;
    }
    node = node.next;
  }

  node.next = Node(key, value);
  this.size++;
}

MyHashMap.prototype.get = (key) => {
  if (this.head === null) { return -1; }

  if (this.head.key === key) { return this.head.val; }

  let node = this.head;

  while (node.next !== null) {
    if (node.next.key === key) {
      return node.next.val;
    }
    node = node.next;
  }

  return -1;
}

MyHashMap.prototype.remove = (key) => {
  if (this.head === null) { return -1; }

  if (this.head.key === key) {
    let removed = this.head;
    this.head = this.head.next;
    return removed;
  }

  let node = this.head;

  while (node.next !== null) {
    if (node.next.key === key) {
      let removed = node.next;
      node.next = node.next.next;
      return removed;
    }
    node = node.next;
  }

  return -1;
}