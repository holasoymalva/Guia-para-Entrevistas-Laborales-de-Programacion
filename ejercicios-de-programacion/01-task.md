# Ejercicio 1 : Symmetric Tree 

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 **Ejemplo de entrada de datos:**

Example 1:

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

Example 2:

```
Input: root = [1,2,2,null,3,null,3]
Output: false
``` 

**Ejemplo de resultado en Javascript:**

```javascript

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

```

**Ejemplo de resultado:**

```python
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
	    return self.checkNodes(root.left, root.right)
    def checkNodes(self, leftNode, rightNode):
        if leftNode == None and rightNode == None:
            result = True
        elif leftNode == None or rightNode == None:
            result = False
        else: 
            if leftNode.val != rightNode.val:
                result = False
            else:
                result = self.checkNodes(leftNode.left, rightNode.right)
                if result:
                    result = self.checkNodes(leftNode.right, rightNode.left)
        return result
```
