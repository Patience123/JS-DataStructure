const LinkedList = require('./index');

function random(max, min) {
    let diff = max - min;
    return Math.ceil(Math.random() * diff + min);
}

let linkedList = new LinkedList();
let k = 3;
console.log(linkedList.isEmpty()); // true

for(let i = 0; i < 12; i++) {
    linkedList.append(random(0, 100));
}

console.log(linkedList.toString());
console.log(linkedList.getHead().value, linkedList.size());

linkedList.insert(0, 75);
linkedList.insert(13, 46);
linkedList.insert(8, 28);
console.log(linkedList.toString());

linkedList.removeAt(0);
linkedList.removeAt(5);
linkedList.removeAt(linkedList.size() - 1);
console.log(linkedList.toString());

console.log('结点28的位置：' + linkedList.findIndex(28));

console.log('链表的中间结点：' + linkedList.findMidNode());
console.log(`链表倒数第${k}个结点：${linkedList.findKthToTail(k)}`);