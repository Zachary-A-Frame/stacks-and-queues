/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    // Used to store position of next element to be stored
    this.last = null;
    // Number of elements a queue can have
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val);

    // If our first value is null, set our first *and* last value to be that node value.
    if (!this.first) {
      this.first = node;
      this.last = node;
    // If our first node is not null (as in, it is occupied), then we are making the next* value (the value that comes after our last value) this new node value. Then, our last node is redefined as that value.
    } else {
      this.last.next = node;
      this.last = node;
    }
    // We only add one value at a time, so we always add +1 to the size of our queue, which defines the number of elements a queue can have.
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // Validate that this isn't an empty queue
    if (!this.first) throw new Error("Can't dequeue from an empty queue.");
    // Set the value we want to remove as our temp variable (our first* value in our queue)
    let temp = this.first;
    // If our queue is only one length long, make our last value be null
    if (this.first == this.last) {
      this.last = null;
    }
    // Then, set our first value to whatever the next value in the queue is. We do it in this order because if we don't have a defined integer as our next value, we are making .first = null, just like we did above. Otherwise, we're just making our head be the next value in the list.
    this.first = this.first.next;
    // Reduce the size of our queue by one.
    this.size--;
    // Return that value from the top.
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    // Super simple. this refers to this instance of Queue, val refers to the val property of the referenced node.
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this.size === 0
  }
}

module.exports = Queue;
