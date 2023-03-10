class Queue<T> {
  private queue: T[];

  enqueue(value: T) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  toArray() {
    return this.queue.slice();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  clear() {
    this.queue = [];
  }

  constructor() {
    this.queue = [];
  }
}

export default Queue;
