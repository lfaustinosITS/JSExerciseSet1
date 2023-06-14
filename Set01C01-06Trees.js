class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  addChild(childNode) {
    this.children.push(childNode);
  }
}
  
function displayTree(node, indent = '', isLastChild = true, isFirstLevel = true) {
  if (!isFirstLevel) {
    const branch = isLastChild ? '|_ ' : '|- ';
    console.log(indent + branch + node.value);
  } else {
    console.log(node.value);
  }
  const childIndent = indent + (isLastChild ? '   ' : '│  ');
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    const isLastChild = i === node.children.length - 1;
    displayTree(child, childIndent, isLastChild, false);
  }
}
  
const root = new TreeNode('A');
const nodeA = new TreeNode('a');
const nodeB = new TreeNode('b');
const nodeC = new TreeNode('c');
const nodeAA = new TreeNode('aa');
const nodeBA = new TreeNode('ba');
const nodeBB = new TreeNode('bb');
const nodeCA = new TreeNode('ca');
const nodeCB = new TreeNode('cb');
const nodeCBA = new TreeNode('cba');
const nodeCAA = new TreeNode('caa');
  
root.addChild(nodeA);
root.addChild(nodeB);
root.addChild(nodeC);
nodeA.addChild(nodeAA);
nodeB.addChild(nodeBA);
nodeB.addChild(nodeBB);
nodeC.addChild(nodeCA);
nodeC.addChild(nodeCB);
nodeCB.addChild(nodeCBA);
nodeCA.addChild(nodeCAA);
  
displayTree(root);
  