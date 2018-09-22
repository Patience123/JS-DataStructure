let Queue = (function () {
    let _items = new WeakMap();
    class Queue {
        constructor () {
            _items.set(this, []);   
        }

        enQueue (element) {
            _items.get(this).push(element);
        }

        deQueue () {
            return _items.get(this).shift();
        }

        front () {
            let q = _items.get(this);
            return q[0];
        }

        isEmpty () {
            return _items.get(this).length === 0;
        }

        size () {
            return _items.get(this).length;
        }

        print () {
            console.log(_items.get(this).toString());
        }
    }
    return Queue;
})();

module.exports = Queue;