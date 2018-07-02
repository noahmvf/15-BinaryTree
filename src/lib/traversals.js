'use strict';

// O(n) time complexity for traversals where n is the number of nodes
// Space complexity is O(h), where h is rthe height of the tree

// pre-order - root, left, right
const preOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  callback(rootNode.value);
  preOrderTraversal(rootNode.left, callback);
  preOrderTraversal(rootNode.right, callback);
  return undefined;
};

// post-order - left, right, root
const postOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  postOrderTraversal(rootNode.left, callback);
  postOrderTraversal(rootNode.right, callback);
  callback(rootNode.value);
  return undefined;
};

// in-order - left, root, right
const inOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  inOrderTraversal(rootNode.left, callback);
  callback(rootNode.value);
  inOrderTraversal(rootNode.right, callback);
  return undefined;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
