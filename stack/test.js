const Stack = require('./index');
// const Stack = require('./ES6-stack');
const baseConvert = require('./example/base-converter');

let stack = new Stack();
console.log(stack.isEmpty());  // true
stack.pushStack(8);
stack.pushStack(5);
console.log(stack.Size());  // 2
stack.pushStack(13);
console.log(stack.peek());  // 13 
stack.popStack();
stack.print();  // 8,5
stack.Clear();
console.log(stack.isEmpty());  // true

// 十进制转二进制
let decimalToBinary = baseConvert.decimalToBinary;
console.log(decimalToBinary(10));  // 1010
console.log(decimalToBinary(233));  // 11101001

// 十进制转任意进制
let baseConverter = baseConvert.baseConverter;
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
