// 栈的构造函数
function Stack () {
    let items = []; // 存放栈中的元素(私有变量)

    // 入栈
    this.pushStack = function (element) {
        items.push(element);
    }

    // 出栈
    this.popStack = function () {
        return items.pop();
    }

    // 返回栈顶元素
    this.peek = function () {
        return items[items.length - 1];
    }

    // 判断栈是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }

    // 栈中元素的个数
    this.Size = function () {
        return items.length;
    }

    // 清空
    this.Clear = function () {
        items = [];
    }

    // 打印
    this.print = function () {
        console.log(items.toString());
    }
}

module.exports = Stack;

