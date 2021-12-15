/**
 *
 * Tree 클래스에 addChild 및 map 메소드를 구현하세요.
 *
 * map 메소드는 함수를 인자로 받습니다.
 * 이는 트리를 가로질러 각 노드의 값을 매핑 함수에 전달하고, 그 결과를 포함하는 새 트리를 생성합니다.
 * 따라서, map 메소드는 Tree와 구조와 같고, 값이 다른 트리를 반환합니다.
 * 그러나, map 메소드를 사용하는 원래 트리는 수정되어서는 안됩니다.
 *
 * 예:
 *   let root1 = new Tree(1);
 *   let branch2 = root1.addChild(2);
 *   let branch3 = root1.addChild(3);
 *   let leaf4 = branch2.addChild(4);
 *   let leaf5 = branch2.addChild(5);
 *   let leaf6 = branch3.addChild(6);
 *   let leaf7 = branch3.addChild(7);
 *   let newTree = root1.map(function (value) {
 *     return value * 2;
 *   })
 *  newTree.value // 2
 *  newTree.children[0].value // 4
 *  newTree.children[1].value // 6
 *  newTree.children[0].children[1].value // 10
 *  newTree.children[1].children[1].value // 14
 *  root1.value // still 1
 */

const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child)
  }

  this.children.push(child)

  return this
};

Tree.prototype.map = function(callback) {
  return this.children.reduce(function (tree, child) {
    return tree.addChild(child.map(callback))
  }, new Tree(callback(this.value)))
};

module.exports = Tree;
