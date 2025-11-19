function flatten(root: TreeNode | null): void {
    let prev = null;

    function dfs(node: TreeNode | null) {
        if (!node) return;

        dfs(node.right);
        dfs(node.left);

        node.right = prev!;
        node.left = null;
        prev = node;
    }

    dfs(root);
};