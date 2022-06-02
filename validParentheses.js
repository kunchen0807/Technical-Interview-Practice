/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/*
I: string
O: boolean
C:
E:
*/

// create a hashmap contains [] {}, and ()
// create an empty array
// iterate the string
  // if current element is not in hashmap
    // push current element into array
  // else
    // find the corresponding opening Parentheses
    // if it is match to the last element of array
      // remove last element from array
    // else
      // return false
  // return true
  var isValid = function(s) {
    let parenthesesMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (parenthesesMap[s[i]] === undefined) {
            arr.push(s[i]);
        } else {
            if (parenthesesMap[s[i]] === arr[arr.length - 1]) {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    return true;
};

console.log(isValid("()[]{}")) //true
console.log(isValid("({[]})")) //true
console.log(isValid("(}")) //false
console.log(isValid("{(})")) //false