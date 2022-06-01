/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/
/*
I: array of numbers
O: array of arrays contain 3 numbers add together is equal to 0
C:
E:
*/

var threeSum = function(nums) {
  let result = [];
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      let l = i + 1;
      let r = nums.length - 1;
      while(l < r) {
          let threeSumValue = nums[i] + nums[l] + nums[r];
          if(threeSumValue > 0) {
              r--;
          } else if(threeSumValue < 0) {
              l++;
          } else {
              result.push([nums[i], nums[l], nums[r]]);
              l++;
              while( nums[l] === nums[l + 1] && l< r){
                  l++;
              }
          }
      }
  }
  return result;
};

var exampleNums = [-1,0,1,2,-1,-4]

console.log(threeSum(exampleNums)) // Output: [[-1,-1,2],[-1,0,1]]