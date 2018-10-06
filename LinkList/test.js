const LinkedList = require('./index');

function random(max, min) {
    let diff = max - min;
    return Math.ceil(Math.random() * diff + min);
}

let linkedList = new LinkedList();
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

console.log(linkedList.findIndex(28));