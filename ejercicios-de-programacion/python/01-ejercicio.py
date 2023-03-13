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