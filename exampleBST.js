const BinarySearchTree = require('./BinarySearchTree');

const BST = new BinarySearchTree();
// const BST2 = new BinarySearchTree();
BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);
// BST.remove(4);
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
// console.log(BST);

// BST2.insert(7);
// BST2.insert(3);
// BST2.insert(9);
// BST2.insert(5);
// BST2.insert(4);
// BST2.insert(2);
// BST2.insert(6);
// BST2.insert(1);

const heightOfBST = tree => {
  // If the tree is empty return 0
  if(!tree) return 0;
  // If the tree has values, check the left
  // by running heightOfBST on BST.left
  // If the tree has values, check the right
  // by running heightOfBST on BST.right
  return 1 + Math.max(heightOfBST(tree.left), heightOfBST(tree.right));
};

// console.log(heightOfBST(BST));

/* 
FORWARD PHASE OF RECURSION
1 + max( heightOfBST(1) ,                                       heightOfBST(4))
              ||                                                         ||
  1 + max(heightOfBST(null), heightOfBST(2))           1 + max(heightOfBST(null), heightOfBST(6))
                                ||                                                ||
                        1 + max(heightOfBST(null)+heightOfBST(null))        
*/



//

// const isBST = tree => {

//   console.log('count')
//   //try and catch
//   if(!tree) {
//     console.log('no Tree')
//     return false;
//   }

//   // if(tree.hasOwnProperty('key') && tree.hasOwnProperty('parent')) {
//   //   return true;
//   // }

//   if(tree.hasOwnProperty('key') && tree.hasOwnProperty('parent') && tree.left === null && tree.right === null) {
//     console.log('END')
//     return true;
//   }

//   //base case if only root node is there its still a bst
//   // if(!tree.left && !tree.right) {
//   //   return true;
//   // }

//   if(tree.right) {//checks if there is a right
//     console.log('*******right side*******')
//     // console.log('RIGHT',tree.right.key)
//     // console.log('TREE',tree.key)
//     if(tree.right.key > tree.key) {  //checks if the right greater than the parent node
//       console.log('RIGHT',tree.right.key)
//       console.log('TREE',tree.key)
//       return isBST(tree.right); 
//     } else {
//       console.log('right false')
//       return false;
//     }
//   } else if(tree.left) {
//     console.log('*******left side*******')
//     if(tree.left.key < tree.key) {  //checks if the right greater than the parent node
//       console.log('LEFT',tree.left.key)
//       console.log('TREE',tree.key)
//       return isBST(tree.left); 
//     } else {
//       console.log('left false')
//       return false;
//     }
//   }

// }

// console.log(isBST(BST));


const isBST2 = tree => {

  if(!tree) {
    return true;
  }

  if(!tree.left) {
    return true;
  }

  if(tree.left.key > tree.key) {
    return false;
  }

  if(!tree.right) {
    return true;
  }

  if(tree.right.key < tree.key) {
    return  false;
  }

  if(!isBST2(tree.left) || !isBST2(tree.right)) {//returns true or false
    return false;
  }

  return true;


  // while(true){
  //   if(!tree || !tree.left || !tree.right) {
  //     truth = true;
  //   }

  //   return isBST2(tree.right) && isBST2(tree.left);
  // }
  // return truth;

  // if(!tree) {
  //   console.log('No tree');
  //   return false;
  // }
  
  // if(tree.right.key > tree.key || tree.left.key < tree.key) {
  //   console.log('correct')
    
  //   return isBST2(tree.left)
  // }

 

  // if(tree.right && tree.left) {
  //   console.log(tree.key)
  //   return isBST2(tree.right), isBST2(tree.left);
  // }

    // if(tree.right) {//this if case is wrong because it will return right and exit ignoring left
    //   console.log('RIGHT',tree.right.key);
    //   // console.log('LEFT',tree.left.key)
    
    //   return isBST2(tree.right);
    // }

    // if(tree.left) {
    //   console.log('LEFT',tree.left.key);
    //   return isBST2(tree.left);
    // }
  
}

console.log(isBST2({key: 3, left: {key: 5, left: null, right: null}, right: {key: 4, left: null, right: null}}));

