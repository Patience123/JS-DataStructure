function BinarySearchTree() {
    // 树的键的构造函数
    let Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    // 根节点
    let root = null;

    // 向树中插入一个键
    this.insert = function(key) {
        let newNode = new Node(key);
        if(root === null) {
            root = newNode
        } else {
            insertNode(root, newNode);
        }
    }

    // 将节点加在非根节点（辅助函数）
    function insertNode(node, newNode) {
        if(newNode.key < node.key) {
            if(node.left !== null) {
                insertNode(node.left, newNode);
            } else {
                node.left = newNode;
            }
        } else {
            if(node.right !== null) {
                insertNode(node.right, newNode);
            } else {
                node.right = newNode;
            }
        }
    }

    // 树的中序遍历
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    }

    function inOrderTraverseNode(node, callback) {
        if(root !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    // 树的先序遍历
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    }

    function preOrderTraverseNode(ndoe, callback) {
        if(root !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    // 树的后序遍历
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    }

    function postOrderTraverseNode(node, callback) {
        if(root !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    // 搜索最小值
    this.findMin = function() {
        return findMinNode(root);
    }

    function findMinNode(node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    // 搜素最大值
    this.findMax = function() {
        return findMaxNode(root);
    }

    function findMaxNode(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    // 搜素特定值
    this.search = function(key) {
        return searchNode(root, key);
    }

    function searchNode(node, key) {
        if(node === null) {
            return false;
        }
        if(key < node.key) {
            return searchNode(node.left, key);
        } else if(key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    }
}