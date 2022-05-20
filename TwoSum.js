/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
I: an array with numbers and a target value
O: an array with the indices of two numbers that add together is equal to target
C:
E: if nums array has less than two element
*/
var twoSum = function(nums, target) {
  //initiate result equal to empty array
  let result = [];
  // if nums array length is less than two (edge case)
  if (nums.length < 2) {
      return [];
  }

  // iterate nums array start at i = 0 index
  for (let i = 0; i < nums.length; i++) {
    // iterate nums array start at j = i + 1
      for (let j = i + 1; j < nums.length; j++) {
          // if nums[i] add nums[j] is equal to target value
          if(nums[i]+ nums[j] === target) {
           // push i and j into result
              result.push(i,j);
          }
      }
  }
  return result;
};

console.log(twoSum([2,7,11,15], 9))

// a better way to solve this problem only use one loop
var twoSumBetterWay = function(nums, target) {
  let storage = {};
  let result = [];
  // edge case
  if (nums.length < 2) {
      return [];
  }

  // iterate array
    // if current element is in storage object
      // push the current index and value of storage[nums[i]]
    // else set the difference between target and current element as key and current index as value
  for(let i = 0; i < nums.length; i++) {
      let difference = target - nums[i];
      if(storage[nums[i]] !== undefined) {
          result.push(storage[nums[i]], i);
     }
      storage[difference] = i;
  }
  return result;
}

console.log(twoSumBetterWay([2,7,11,15], 9))