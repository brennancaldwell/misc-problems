/*
Leetcode Easy: How Many Numbers ARe Smaller Than Current Number
*/

var smallerNumbersThanCurrent = function(nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
      var counter = 0;
      for (var j = 0; j < nums.length; j++) {
          if (i !== j) {
              if (nums[j] < nums[i]) {
                  counter++;
              }
          }
      }
      result.push(counter);
  }
  return result;
};