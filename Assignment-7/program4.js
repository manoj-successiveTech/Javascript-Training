// 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

class RateLimiter 
{
  constructor(maxConcurrent) {
    this.maxConcurrent = maxConcurrent;
    this.queue = [];
    this.currentConcurrent = 0;
  }

  add(request) {
    return new Promise((resolve, reject) => {
      this.queue.push({ request, resolve, reject });
      this.process();
    });
  }

  process() {
    while (this.currentConcurrent < this.maxConcurrent && this.queue.length > 0) {
      const { request, resolve, reject } = this.queue.shift();
      this.currentConcurrent++;
      request()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this.currentConcurrent--;
          this.process();
        });
    }
  }
}

// Example usage
const rateLimiter = new RateLimiter(2); // Limit to 2 concurrent requests

function fetchData(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Data fetched for ${id}`);
    }, 1000);
  });
}

rateLimiter.add(() => fetchData(1)).then(console.log);
rateLimiter.add(() => fetchData(2)).then(console.log);
rateLimiter.add(() => fetchData(3)).then(console.log);