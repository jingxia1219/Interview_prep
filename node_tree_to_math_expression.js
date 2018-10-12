// # Function from Tree

// You are given the root node of a binary tree consisting of operands and integers. Integer values are stored on the leaf nodes, with the remaining nodes consisting of mathemematical operands in the set {'+', '-', '*', '/'} represented as strings. An example of such a tree follows:

//         [+]
//         / \
//       [4] [*]
//           / \
//         [3]  [2]
// 
//        
// Starting at the bottom of the tree, evaluate each expression and return the value of each expression. For example, in the above tree, you would first find that 3 * 2 = 6. Then, you would add 4 to the 6 you just evaluated for a return value of 10.


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null; 
    }
}

rootNode = new Node("+");
node1 = new Node(4);
rootNode.left = node1; 
node2 = new Node("*");
rootNode.right = node2;
node3 = new Node(3);
node2.left = node3;
node4 = new Node(2);
node2.right = node4;



function calculate(node) {
    if (typeof node.val === "number") {
       return node.val;
    }
    
    const leftSubTree = calculate(node.left);  
    const rightSubTree = calculate(node.right); 
    return convertOperands(leftSubTree, rightSubTree, node.val);
}

function convertOperands(n1, n2, operand) {
    if (operand === "+") {
        return (n1 + n2);
    } else if (operand === "-") {
        return (n1 - n2); 
    } else if ( operand === "*") {
        return (n1 * n2);
    } else if (operand === "/") {
        return (n1 / n2);
    }
}

calculate(rootNode); // => 10 


// Part 2: Instead of returning the integer value, return the expression itself as a string. "(4 + (3 * 2))"
// Part 3: Instead of returning the string, take the string and build the tree.

//         [+]
//         / \
//       [4] [*]
//           / \
//         [3]  [2]
// 
function nodeToString(node) {
   if ( typeof(node.val) === 'number' )  {
       return node.val;
   } 
   const leftSubTree = "(" + nodeToString(node.left);
   const rightSubTree = nodeToString(node.right) +")";
   
   return leftSubTree + node.val + rightSubTree;
}

console.log(nodeToString(rootNode));











