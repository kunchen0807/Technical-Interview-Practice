/*
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.
*/

/*
I: array of integers
O: boolean value
C:
E:
*/

var containsDuplicate = function(nums) {
  let result = false;
   nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) {
          result = true;
      }
  }
   return result;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // Output: true
console.log(containsDuplicate([1,2,3,4])) //false