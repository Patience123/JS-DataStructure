// 最小优先队列
function priorityQueue () {
    let items = [];
    
    function qElement (element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enQueue = function (element, priority) {
        let added = false;
        let current = new qElement(element, priority);
        for(let i = 0; i < items.length; i++) {
            if(current.priority < items[i].priority) {
                items.splice(i, 0, current);
                added = true;
                break;
            }
        }
        if(!added) {
            items.push(current);
        }
    }

    this.deQueue = function () {
        return items.shift();
    }

    this.print = function () {
        for(let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    }
}

module.exports = priorityQueue;