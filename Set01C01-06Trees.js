class TreeNode {
  constructor(value,children=[]) {
    this.value = value;
    this.children = children;
  }
  
  addChild(childNode) {
    this.children.push(childNode);
  }
}
  
function displayTree(node, indent = '', isLastChild = true, isFirstLevel = true) {
  if (!isFirstLevel) {
    const branch = isLastChild ? ' └── ' : ' ├── ';
    console.log(indent + branch + node.value);
  } else {
    console.log('    '+node.value);
  }
  const childIndent = indent + (isLastChild ? '   ' : ' │  ');
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    const isLastChild = i === node.children.length - 1;
    displayTree(child, childIndent, isLastChild, false);
  }
}
  



const nodeCBA = new TreeNode('cba');
const nodeCAA = new TreeNode('caa');
const nodeAA = new TreeNode('aa',);
const nodeBA = new TreeNode('ba');
const nodeBB = new TreeNode('bb');
const nodeCA = new TreeNode('ca',[nodeCAA]);
const nodeCB = new TreeNode('cb',[nodeCBA]);
const nodeA = new TreeNode('a',[nodeAA]);
const nodeB = new TreeNode('b',[nodeBA,nodeBB]);
const nodeC = new TreeNode('c',[nodeCA,nodeCB]);
const root = new TreeNode('A',[nodeA,nodeB,nodeC]);
  
displayTree(root);
  