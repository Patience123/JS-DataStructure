// 双向链表
function DoublyLinkedList () {
    // 结点构造函数
    function Node (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    // 私有变量
    let length = 0;
    let head = null;
    let tail = null;

    // 从任意位置插入结点
    this.insert = function (position, element) {
        if(position >= 0 && position <= length) {
            let newNode = new Node(element);
            let current = head;
            let previous;
            let index = 0;
            if(position === 0) {  // 在第一个位置添加
                if(!head) {  // 链表为空的情况
                    head = newNode;
                    tail = newNode;
                } else {
                    newNode.next = current;
                    current.prev = newNode;
                    head = newNode;
                }
            } else if(position === length) {  // 在最后一个位置添加
                current = tail;  // current指向尾节点
                current.next = newNode;
                newNode.prev = current.next;
                tail = newNode;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                newNode.next = current;
                previous.next = newNode;
                current.prev = newNode;
                newNode.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    // 从链表的任意位置删除结点
    this.removeAt = function (position) {
        if(position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;
            if(position === 0) {
                head = current.next;
                if(length === 1) {  // 只有一个节点的情况
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if(position === length - 1) {  // 删除链表的尾节点
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.value;
        } else {
            return null;
        }
    }
}

module.exports = DoublyLinkedList;