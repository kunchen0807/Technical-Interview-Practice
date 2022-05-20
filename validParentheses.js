/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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
I: a string contains '(', ')', '{', '}', '[' and ']'
O: boolean value
C:
E: empty string
*/


// if string is empty
  // return false

//convert string into array
//while array length is not equal to lastLength
  //set lastLength equal to array length
  //iterate array
    //if current element is '(' and next element is ')'
    //delete current and next element from array
    //if current element is '{' and next element is '}'
    //delete current and next element from array
    //if current element is '[' and next element is ']'
    //delete current and next element from array

//if array length is equal to 0
  //return true
// else
  // return false

  var isValid = function(s) {
    if (s === '') {
      return false;
    }

    let lastLength = 0;
    let sArray = s.split('');
    while(sArray.length !== lastLength) {
      lastLength = sArray.length;
      for (let i = 0; i < sArray.length; i++) {
        if(sArray[i] === '(' && sArray[i+1] ===')') {
          sArray.splice(i, 2);
        }
        if(sArray[i] === '{' && sArray[i+1] ==='}') {
          sArray.splice(i, 2);
        }
        if(sArray[i] === '[' && sArray[i+1] ===']') {
          sArray.splice(i, 2);
        }
      }
    }
    if(sArray.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  console.log(isValid("()[]{}"))
  console.log(isValid("([]){}"))
  console.log(isValid("(){]"))