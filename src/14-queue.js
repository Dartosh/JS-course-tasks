// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(elem) {
    this.length++;
    if (!this.head) {
      this.head = new ListNode(elem);
      this.head.value = elem;
    } else {
      let add = this.head;
      while (add.next) {
        add = add.next;
      }
      add.next = new ListNode(elem);
      add.next.value = elem;
    }
  }

  dequeue() {
    if (this.length === 0) return Error;
    const del = this.head;
    this.head = this.head.next;
    return del.value;
  }
}

module.exports = Queue;
