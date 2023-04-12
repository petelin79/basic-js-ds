const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.obj = null
  }

  getUnderlyingList() {
    return this.obj
  }

  show() {
    console.log(this.obj);
  }

  enqueue(value) {
    let newElem = new ListNode(value)
    
    if (!this.obj) {
      this.obj = newElem;
      return
    }
    else {
      let cur = this.obj
      while (cur.next) {
        cur = cur.next
      }
      cur.next = newElem
    }
  }

  dequeue() {
    let cur = this.obj.value
    this.obj =  this.obj.next
    return cur
  }
}

module.exports = {
  Queue
};
