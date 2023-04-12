class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

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

let tst = new Queue();
tst.enqueue(5)
tst.enqueue(3)
tst.enqueue(17)
tst.dequeue()
tst.show()