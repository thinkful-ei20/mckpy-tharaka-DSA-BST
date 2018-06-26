const BinarySearchTree = require('./BinarySearchTree');

const BST = new BinarySearchTree();
BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);
BST.remove(4);
// BST.insert('E');
// BST.insert('A');
// BST.insert('S');
// BST.insert('Y');
// BST.insert('Q');
// BST.insert('U');
// BST.insert('E');
// BST.insert('S');
// BST.insert('T');
// BST.insert('I');
// BST.insert('O');
// BST.insert('N');
console.log(BST);

const heightOfBST = tree => {
  // If the tree is empty return 0
  if(!tree) return 0;
  // If the tree has values, check the left
  // by running heightOfBST on BST.left
  // If the tree has values, check the right
  // by running heightOfBST on BST.right
  return 1 + Math.max(heightOfBST(tree.left), heightOfBST(tree.right));
};

console.log(heightOfBST(BST));

/* 
FORWARD PHASE OF RECURSION
1 + max( heightOfBST(1) ,                                       heightOfBST(4))
              ||                                                         ||
  1 + max(heightOfBST(null), heightOfBST(2))           1 + max(heightOfBST(null), heightOfBST(6))
                                ||                                                ||
                        1 + max(heightOfBST(null)+heightOfBST(null))        
*/