/* Write a function that finds the largest possible product of any three numbers
 * from an array. Make your function handle negative numbers.
 *
 * Key insights:
 * 1) if the array is full of positive numbers OR full of negative numbers,
 * finding the largest product of three will be as simple as sorting the
 * array, then taking the product of the largest three numbers.
 * 2) if the array is mixed negative and positive and there are at least
 * two negative numbers, to determine the largest product, we have to
 * compare the product of the largest three positive numbers and the
 * product of the largest positive number and the *smallest* two negative
 * numbers.
 *
 * In the case of an empty array? An array with fewer than three elements?
 * What is the ideal return value here? Have chosen to make this undefined
 * but could easily change.
 */

const largestProductOfThree = (array) => {
  // if array length is less than three, return undefined
  if (array.length < 3) { return undefined; }
  // init var for positive and negative arrays
  let pos = [], neg = [];
  // push array values into positive, negative arrays
  array.forEach(val => {
    val >= 0 ? pos.push(val) : neg.push(val);
  })
  // sort positive and negative arrays
  pos.sort((a, b) => sortDescending(a, b));
  neg.sort((a, b) => sortDescending(a, b));
  // if positive array is empty
  if (pos.length === 0) {
    // return product of three largest negatives
    return neg[0] * neg[1] * neg[2];
  }
  // if negative array length is two or greater
  if (neg.length >= 2) {
    // if positive length is greater than two
    if (pos.length > 2) {
      // return the larger of the products of three largest positive or largest positive and two smallest negative numbers
      return Math.max(pos[0] * pos[1] * pos[2], pos[0] * neg[neg.length-1] * neg[neg.length-2]);
    }
    // else return largest positive and two smallest negative
    return pos[0] * neg[neg.length-1] * neg[neg.length-2];
  }
  // else return product of largest three positive numbers
  return pos[0] * pos[1] * pos[2];
};

const sortDescending = (a, b) => {
  if (a > b) {
      return -1;
  } else if (a < b) {
      return 1;
  } else {
      return 0;
  }
};

/*
A note on the Array.prototype.sort() method...
First of all, the arrays are sorted in place, and no copies are made.
Second, time complexity cannot be guaranteed, as it depends upon the
implementation.
Third, and most importantly: if no compare function is provided, all
non-undefined array elements will be converted into *strings* and
compared in UTF-16 code units order. This is why passing in the following:

      [1, 30, 4, 21, 100000].sort()

will return:

      [1, 100000, 21, 30, 4]

Thus I have supplied a sorting function above.
*/