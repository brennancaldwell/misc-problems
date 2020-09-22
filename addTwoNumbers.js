/*
ADD TWO NUMBERS
src: https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 Definition for singly-linked list.
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }


 @param {ListNode} l1
 @param {ListNode} l2
  @return {ListNode}

*/

function listNode(val, next) {
  var list = {};
  list.val = (val === undefined ? 0 : val);
  list.next = (next === undefined ? null: next);
  return list;
}

var addTwoNumbers = function(l1, l2) {
  var l1Num = numConverter(l1, []);
  var l2Num = numConverter(l2, []);

  return listConverter(l1Num + l2Num);
};

var numConverter = function(node, array) {
  while (node !== null) {
    array.unshift(node.val);
    node = node.next;
  }
  return Number(array.join(''));
};

var listConverter = function(number) {
  var array = number.toString().split('').reverse();
  var list;
  var currentNode;
  for (var i = 0; i < array.length; i++) {
    var newNode = {};
    newNode.val = Number(array[i]);
    newNode.next = null;
    if (list === undefined) {
      list = newNode;
      currentNode = newNode;
    }
    currentNode === newNode ? currentNode : currentNode.next = newNode;
    currentNode = newNode;
  }
    return list;
};

function add(str1, str2) {
  var result = '';
  var str1length = str1.length;
  var str2length = str2.length;

  if (str2length > str1length) {
    var temp = str2;
    str2 = str1;
    str2 = temp
  }

  var carry = 0;
  var a;
  var b;
  var temp;
  var digitSum;

  for (let i = 0; i < str1.length; i++) {
    a = parseInt(str1[str1.length - 1 - i]);
    b = parseInt(str2[str2.length - 1 - i]);
    b = (b) ? b : 0;
    temp = (carry + a + b).toString();
    digitSum = temp[temp.length - 1];
    carry = parseInt(temp.slice(0, temp.length-1));
    carry = (carry) ? carry : 0;

    sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;
  }

  return sum;
}



/* Medium problem passing 1560/1563... Here's one it's failing:
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
[5,6,4]
Believe this has to do with JS not being able to add very large numbers.

Added the final section, which deals with the addition, and all tests are passing.


Another solution:

var addTwoNumbers = function(l1, l2) {
    let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};

What I love about this solution is it handles the adding quirk *as* it is adding *as* it is converting to linked list.
*/