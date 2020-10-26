/*
Grokking:https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM

Find Happy Number

Any number will be called a happy number if, after repeatedly replacing it
with a number equal to the sum of the square of all of its digits, leads us
to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead,
they will be stuck in a cycle of numbers which does not include ‘1’.
*/

const findHappyNumber = (num) => {
  let slow = num, fast = num;

  while (true) {
    slow = computeSum(slow);
    fast = computeSum(computeSum(fast));

    if (slow === fast) break;
  }

  return slow === 1;
}

const computeSum = (num) => {
  let total = 0;
  while (num > 0) {
    let dig = num % 10;
    total += Math.pow(dig, 2);
    num = Math.floor(num / 10);
  }
  return total;
}

/*
Was quite confused at first at how to use fast and slow here, but the key is
to notice *cycles*, and at some point, our computeSum was going to end in
a cycle of repeating 1s. This is how we can determine we have reached the
end of our computation -- we have no other way of determining when we have
reached a cycle!
*/