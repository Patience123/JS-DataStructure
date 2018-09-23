// const Queue = require('./index');
const Queue = require('./ES6-queue');
const priorityQueue = require('./example/priorityQueue');
const hotPotato = require('./example/hot-potato');

let queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enQueue(8);
queue.enQueue(18);
console.log(queue.size()); // 2
queue.enQueue(28);
console.log(queue.front()); // 8
queue.deQueue();
queue.print(); // 18,28

console.log('---------');

let pQueue = new priorityQueue();
pQueue.enQueue(4, 1);
pQueue.enQueue(40, 2);
pQueue.enQueue(8, 1);
pQueue.enQueue(10, 3);
pQueue.print();
console.log('---------');
pQueue.deQueue();
pQueue.print();

console.log('---------');

let nameList = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];
let winner = hotPotato(nameList, 7);
console.log(`最后的获胜者是${winner}`); 