// 合并两个链表
const LinkList = require('./index');

function Merge (pHead1, pHead2) {
    if(pHead1 === null) {
        return pHead2;
    } else if(pHead2 === null) {
        return pHead1;
    }
    let mergeHead = null;
    if(pHead1.value < pHead2.value) {
        mergeHead = pHead1;
        mergeHead.next = Merge(pHead1.next, pHead2);
    } else {
        mergeHead = pHead2;
        mergeHead.next = Merge(pHead1, pHead2.next);
    }
    return mergeHead;
}

let linkList1 = new LinkList();
let linkList2 = new LinkList();

let i = 0, j = 1
while(i < 10) {
    linkList1.append(i);
    i = i + 2;
}
while(j < 11) {
    linkList2.append(j);
    j = j + 2;
}

console.log(linkList1.toString());
console.log(linkList2.toString());

let MergeHead = Merge(linkList1.getHead(), linkList2.getHead());
let string = '';
while(MergeHead) {
    string += MergeHead.value + (MergeHead.next ? '->' : '');
    MergeHead = MergeHead.next;
}
console.log(string);
