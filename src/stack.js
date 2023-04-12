const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  
  pop() {
    if (this.length < 0) return 
    
    else {

      let num = this[this.length-1]
      delete this[this.length-1]
      this.length--

      return num
    }
  }
  
  push(el) {
    if(!this.length) this.length=0
    this[this.length]=el

    this.length++;
  }

  peek() {

    return this[this.length-1]
  }
}

module.exports = {
  Stack
};
