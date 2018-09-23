// 模拟击鼓传花游戏
const Queue = require('../index');

function hotPotato (nameList, num) {
    let queue = new Queue();
    // 让参与的所有人进队
    for(let i = 0; i < nameList.length; i++) {
        queue.enQueue(nameList[i]);
    }
    while(queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            queue.enQueue(queue.deQueue());  // 让拿到花的出队，并放到队尾模拟传花
        }
        console.log(`这一轮${queue.deQueue()}被淘汰了`);
    }
    return queue.deQueue();
}

module.exports = hotPotato;