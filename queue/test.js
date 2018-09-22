// const Queue = require('./index');
const Queue = require('./ES6-queue');
const priorityQueue = require('./example/priorityQueue');

let queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enQueue(8);
queue.enQueue(18);
console.log(queue.size()); // 2
queue.enQueue(28);
console.log(queue.front()); // 8
queue.deQueue();
queue.print(); // 18,28

let pQueue = new priorityQueue();
pQueue.enQueue(4, 1);
pQueue.enQueue(40, 2);
pQueue.enQueue(8, 1);
pQueue.enQueue(10, 3);
pQueue.print();
console.log('---------');
pQueue.deQueue();
pQueue.print();