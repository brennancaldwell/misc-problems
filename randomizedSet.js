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

class RandomizedSet {
  constructor() {
    this.storage = new Map();
    this.set = [];
  }

  insert(val) {
    if (this.storage.has(val)) return false;
    this.storage.set(val, this.set.length);
    this.set.push(val);
    return true;
  }

  remove(val) {
    if (!this.storage.has(val)) return false;
    const index = this.storage.get(val);
    const last = this.set[this.set.length - 1];
    this.set[index] = last;
    this.storage.set(last, index);
    this.set.pop();
    this.storage.delete(val);
    return true;
  }

  getRandom() {
    return this.set[Math.floor(Math.random() * this.set.length)];
  }
}


/*
Below is my naive implementation of RandomizedSet
Insert and removal is O(1) and random access is O(n)
Size is O(n)
Runtime 440ms (faster than 12.44%)
Memory 48.8MB (less than 6.14%)

Major drawback is obviously random access, which is a problem with my data
structure: objects have O(1) lookup for named keys, but we cannot randomly
choose one by number -- that can be accomplished by an array.

Above, I implement a solution I found online that solves this problem by
using *two* data structures: 1) a Map, which stores each value along with
its corresponding index in 2) an array. This way, we have the benefit of
O(1) insertion and removal and O(1) random access with the drawback of
doubling our storage. Since time is less expensive than space, this might
be the best optimization.

Runtime 160ms (faster than 54.44%)
Memory 47.3MB (less than 6.14%)


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

*/