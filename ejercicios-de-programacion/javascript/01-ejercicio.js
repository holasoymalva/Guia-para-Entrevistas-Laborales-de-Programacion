
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const checkNodes = function(leftNode, rightNode){
    if(!leftNode && !rightNode){
        return true;
    }
    if(leftNode &&  !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val){
        return false;
    }
    return checkNodes(leftNode.right, rightNode.left) && checkNodes(leftNode.left, rightNode.right);
}

const  isSymmetric = function(root) {
    if(!root)
        return true;
    return checkNodes( root.left, root.right);
};

// input 
let root = [1,2,2,3,4,4,3];
// let root;

let prueba = isSymmetric(root);
console.log(prueba);