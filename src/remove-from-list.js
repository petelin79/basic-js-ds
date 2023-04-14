const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(lst, key) {

  function rem(pos) {
    let cur = lst
    if (pos === 0) {
      lst = lst.next
    }
    else {
      let place = 0
      let pr = null
  
      while (place < pos) {
        pr = cur
        cur = cur.next
        place++
      }
      pr.next = cur.next
    }
  }

  function getPlace(key) {
    let cur = lst
    let pos = 0
    
    while (cur.next) {
      if (cur.value == key) return pos
      cur = cur.next

      pos++
    }
    return -1
  }


  while (getPlace(key) >= 0) {
    rem(getPlace(key))
  }

  return lst
}

module.exports = {
  removeKFromList
};
