/*
Leetcode: 380. Insert Delete GetRandom O(1)
https://leetcode.com/problems/insert-delete-getrandom-o1/

Implement the RandomizedSet class:

bool insert(int val) Inserts an item val into the set if not present.
Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns
true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements
(it's guaranteed that at least one element exists when this method is
called). Each element must have the same probability of being returned.
Follow up: Could you implement the functions of the class with each
function works in average O(1) time?
*/

const RandomizedSet = function() {
  this.storage = {};
  this.size = 0;
}

RandomizedSet.prototype.insert = function(val) {
  if (this.storage[val]) return false;
  this.storage[val] = true;
  this.size++;
  return true;
}

RandomizedSet.prototype.remove = function(val) {
  if (this.storage[val] === undefined) return false;
  delete this.storage[val];
  this.size--;
  return true;
}

RandomizedSet.prototype.getRandom = function() {
  return Object.keys(this.storage)[Math.floor(Math.random() * this.size)];
}