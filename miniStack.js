/*
155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.


Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

/*
I:
O:
C:
E:
*/


var MinStack = function() {
  this.stack = [];
  this.min = [];
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (this.min.length < 1) {
      this.min.push(val);
  } else {
    if (this.min[this.min.length - 1] > val) {
        this.min.push(val);
    } else {
        this.min.push(this.min[this.min.length - 1]);
    }
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.min.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.min.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};



var obj = new MinStack();
obj.push(1);
obj.pop();
obj.push(5);
obj.push(8);
obj.push(3);
obj.push(6);
var param_3 = obj.top();
var param_4 = obj.getMin();
console.log(obj);
console.log(param_3); // 6
console.log(param_4); // 3