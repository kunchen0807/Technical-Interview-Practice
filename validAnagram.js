/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of
a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

/*
I:
O:
C:
E:
*/

var isAnagram = function(s, t) {
  let result = true;
  let sObj = {};
  let tObj = {};

  if(s.length !== t.length) {
     return false;
  }

  for (let i = 0; i < s.length; i++) {
     if (sObj[s[i]] === undefined){
        sObj[s[i]] = 1;
     } else {
        sObj[s[i]] ++;
     }
     if (tObj[t[i]] === undefined){
        tObj[t[i]] = 1;
     } else {
        tObj[t[i]] ++;
     }
  }

  for (var key in sObj) {
     if(sObj[key] !== tObj[key]) {
        result = false;
     }
  }

  return result;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));