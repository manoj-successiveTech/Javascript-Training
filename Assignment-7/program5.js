// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }
  add(task) {
    this.queue.push(task);
    this.runTask();
  }
  runTask() {
    while (this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      this.running++;
      task().then(() => {
        this.running--;
        this.runTask();
      });
    }
  }
}
// Example usage
const taskQueue = new TaskQueue(2);         // Create a task queue with a concurrency limit of 2

// Define some tasks that return Promises
function task1() 
{
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task 1 completed');
      resolve();
    }, 2000);
  });
}

function task2() 
{
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task 2 completed');
      resolve();
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task 3 completed');
      resolve();
    }, 3000);
  });
}

// Add tasks to the queue
taskQueue.add(task1);
taskQueue.add(task2);
taskQueue.add(task3);