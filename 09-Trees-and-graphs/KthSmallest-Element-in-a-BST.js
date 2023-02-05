var kthSmallest = function(root, k) {
    let count = 0;
    let result;
    
    const inorder = node => {
        if (!node) return;
        inorder(node.left);
        count++;
        if (count === k) result = node.val;
        inorder(node.right);
    }
    inorder(root);
    return result;
};
