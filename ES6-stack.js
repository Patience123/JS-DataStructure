// 使用weakMap实现类
let Stack = (function () {
    const _items = new WeakMap();
    class Stack {
        constructor () {
            _items.set(this, []);
        }

        pushStack (element) {
            _items.get(this).push(element);
        }

        popStack () {
            return _items.get(this).pop()
        }

        peek () {
            let items =  _items.get(this);
            return items[items.length - 1];
        }

        isEmpty () {
            return _items.get(this).length === 0;
        }

        Size () {
            return _items.get(this).length;
        }

        Clear () {
            _items.set(this, []);
        }

        print () {
            console.log(_items.get(this).toString());
        }
    }
    return Stack;
})();

module.exports =  Stack;


// {
//     let _items = Symbol();

//     class Stack {
//         constructor () {
//             this[_items] = [];  // 假的私有属性
//         }

//         // stack 方法
//     }

//     let stack = new Stack();
    
//     // 入栈操作

//     let objectSymbols = Object.getOwnPropertySymbols(stack);
//     stack[objectSymbols[0]].push(2); // 拿到私有属性并修改
// }

// {
//     class Stack {
//         constructor () {
//             this.items = [];  // item 是公共的，能被拿到并从栈的中间移除元素
//         }
    
//         pushStack (element) {
//             this.items.push(element);
//         }
    
//         popStack () {
//             return this.items.pop();
//         }
//     }
// }