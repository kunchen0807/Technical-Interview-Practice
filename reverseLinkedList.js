/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

/*
I: head of linked list
O: head of reversed linked list
C:
E:
*/

class Node{
  constructor(data, next = null){
      this.data = data,
      this.next = next
  }
}

class LinkedList{
  constructor(){
      this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function(data){
// A newNode object is created with property data and next = null
  let newNode = new Node(data);
// The pointer next is assigned head pointer so that both pointers now point at the same node.
  newNode.next = this.head;
// As we are inserting at the beginning the head pointer needs to now point at the newNode.

  this.head = newNode;
  return this.head;
}

LinkedList.prototype.insertAtEnd = function(data){
// A newNode object is created with property data and next=null

  let newNode = new Node(data);
// When head = null i.e. the list is empty, then head itself will point to the newNode.
  if(!this.head){
      this.head = newNode;
      return this.head;
  }
// Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
 let tail = this.head;
 while(tail.next !== null){
      tail = tail.next;
 }
 tail.next = newNode;
 return this.head;
}

let list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(4);
list.insertAtEnd(5);

console.log(list.head);

var reverseList = function(head) {
 let previousNode = null;
 let currentNode = head;

 while (currentNode) {
    // save nextNode
    nextNode = currentNode.next;
    // let current node point to previous node
    currentNode.next = previousNode;
    // move previous node to current node position
    previousNode = currentNode;
    // move current node to next node position
    currentNode = nextNode;
 }
 return previousNode;
};

console.log(reverseList(list.head))