// 链表的构造函数
function LinkedList () {
    // 结点构造函数
    let Node = function (value) {
        this.value = value;
        this.next = null;
    }

    let head = null; // 头结点
    let length = 0; // 链表的长度

    // 从链表的尾部插入结点
    this.append = function (element) {
        let newNode = new Node(element);
        let current;
        if(head === null) {
            head = newNode;
        } else {
            current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        length++;
    }

    // 从链表的特定位置删除结点
    this.removeAt = function (position) {
        if(position > -1 && position < length) {
            let current = head;
            let previous, index = 0;
            if(position === 0) {
                head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.value;
        } else {
            return null;
        }
    }

    // 从链表的任意位置插入元素
    this.insert = function (position, element) {
        if(position >= 0 && position <= length) {
            let newNode = new Node(element);
            let current = head;
            let previous, index = 0;
            if(position === 0) {
                head = newNode;
                newNode.next = current;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                newNode.next = current;
                previous.next = newNode;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    // 找到链表中指定值的元素并返回其位置，没有则返回-1
    this.findIndex = function (element) {
        let current = head;
        let index = 0;
        while(current) {
            if(current.value === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    // 移除链表中特定值的元素
    this.remove = function (element) {
        let position = this.findIndex(element);
        return this.removeAt(position);
    }

    // 判断链表是否为空
    this.isEmpty = function () {
        return length === 0;
    }

    // 链表的长度
    this.size = function () {
        return length;
    }

    // 链表的头结点
    this.getHead = function () {
        return head;
    }

    // 把链表对象转换为一个字符串
    this.toString = function () {
        let current = head;
        let string = '';
        while(current) {
            string += current.value + (current.next ? '->' : '');
            current = current.next;
        }
        return string;
    }

    // 扩展
    // 求链表的中间结点
    this.findMidNode = function () {
        if(head === null) {
            return null;
        }
        let temp1 = head;
        let temp2 = head;
        while(temp1 && temp1.next) {
            temp1 = temp1.next.next;
            temp2 = temp2.next;
        }
        return temp2.value;
    }

    // 求链表倒数第K个结点
    this.findKthToTail = function (k) {
        if(head === null || k === 0) {
            return null;
        }
        let temp1 = head;
        for(let i = 0; i < k-1; i++) {
            if(temp1.next) {
                temp1 = temp1.next;
            } else {
                return null;
            }
        }
        let temp2 = head;
        while(temp1.next) {
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        return temp2.value;
    }

    // 翻转链表
    this.reverse = function () {
        if(head === null) {
            return null;
        }
        let reversedHead = null;
        let cur = head;
        let pre = null;
        while(cur) {
            let pNext = cur.next;
            if(pNext === null) {
                reversedHead = cur;
            }
            cur.next = pre;
            pre = cur;
            cur = pNext;
        }
        return reversedHead.value;
    }
}

module.exports = LinkedList;