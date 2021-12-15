const Tree = require("./tree-map");
const expect = require("chai").expect;

const verifyTree = function(result, expectation) {
  expect(result).to.be.instanceOf(Tree);
  expect(result.value).to.equal(expectation.value);
  expect(result).not.to.equal(expectation);
  expect(result.children).to.have.length(expectation.children.length);

  for (let i = 0; i < result.children.length; i++) {
    verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
  }
};

describe("tree map", function() {
  it("Tree의 프로토타입에는 map 메소드가 존재합니다.", function () {
    expect(Tree.prototype).to.have.property("map");
    expect(Tree.prototype.map).to.be.an.instanceOf(Function);
  });

  it("인스턴스 생성이 가능해야 합니다.", function () {
    let root = new Tree("root");
    let identity = function (value) {
      return value;
    };
    let result = root.map(identity);
    expect(result).to.be.an.instanceOf(Tree);
  });

  it("map 메소드는 기존 Tree 인스턴스가 아닌, (다른 참조를 갖는) 새로운 트리가 반환합니다.", function () {
    let root = new Tree("root");
    let identity = function (value) {
      return value;
    };
    let result = root.map(identity);
    expect(result).not.to.equal(root);
  });

  it("map 메소드는 기존 Tree 인스턴스가 아닌, (다른 참조를 갖는) 새로운 트리가 반환합니다. (depth 1)", function () {
    let root = new Tree("root");
    let child1 = root.addChild("child1");
    let child2 = root.addChild("child2");
    let identity = function (value) {
      return value;
    };
    let result = root.map(identity);
    expect(result).to.deep.equal(root);
    expect(result.children[0]).not.to.equal(child1);
    expect(result.children[1]).not.to.equal(child2);
  });

  it("map 함수에 전달하는 매핑 함수가 있는 그대로를 반환할 경우, 동일한 모양의 트리가 반환됩니다. (depth 0)", function () {
    // "identity" 함수는 파라미터를 그대로 리턴합니다
    let identity = function (value) {
      return value;
    };
    // create a tree with some values
    // depth: 0
    let input = new Tree(1);

    let result = input.map(identity);
    // 입력과 출력은 같은 값을 같습니다. (참조는 다르나 동일한 모양)
    verifyTree(result, input);
  });

  it("map 함수에 전달하는 매핑 함수가 있는 그대로를 반환할 경우, 동일한 모양의 트리가 반환됩니다. (depth 1)", function () {
    let identity = function (value) {
      return value;
    };
    // create a tree with some values
    // depth: 0
    let input = new Tree(1);
    // depth: 1
    input.addChild(2);
    input.addChild(3);

    let result = input.map(identity);
    verifyTree(result, input);
  });

  it("map 함수에 전달하는 매핑 함수가 있는 그대로를 반환할 경우, 동일한 모양의 트리가 반환됩니다. (depth 2)", function () {
    let identity = function (value) {
      return value;
    };
    // create a tree with some values
    // depth: 0
    let input = new Tree(1);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // depth: 2
    input.children[0].addChild(4);
    input.children[0].addChild(5);
    input.children[1].addChild(6);
    input.children[1].addChild(8);

    let result = input.map(identity);
    verifyTree(result, input);
  });

  it("map 함수에 전달하는 매핑 함수가 있는 그대로를 반환할 경우, 동일한 모양의 트리가 반환됩니다. (depth 3)", function () {
    let identity = function (value) {
      return value;
    };
    // create a tree with some values
    // depth: 0
    let input = new Tree(1);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // depth: 2
    input.children[0].addChild(4);
    input.children[0].addChild(5);
    input.children[1].addChild(6);
    input.children[1].addChild(8);
    // depth: 3 (sparse)
    input.children[0].children[0].addChild(9);
    input.children[1].children[1].addChild(10);

    let result = input.map(identity);
    verifyTree(result, input);
  });

  it("map 함수에 전달하는 매핑 함수가 값의 두배를 반환할 경우, 두배 값을 가진 트리가 반환됩니다. (depth 0)", function () {
    let double = function (value) {
      return value * 2;
    };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    let input = new Tree(1);
    let output = new Tree(2);

    let result = input.map(double);
    verifyTree(result, output);
  });

  it("map 함수에 전달하는 매핑 함수가 값의 두배를 반환할 경우, 두배 값을 가진 트리가 반환됩니다. (depth 1)", function () {
    let double = function (value) {
      return value * 2;
    };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    let input = new Tree(1);
    let output = new Tree(2);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // expected values
    output.addChild(4);
    output.addChild(6);

    let result = input.map(double);
    verifyTree(result, output);
  });

  it("map 함수에 전달하는 매핑 함수가 값의 두배를 반환할 경우, 두배 값을 가진 트리가 반환됩니다. (depth 2)", function () {
    let double = function (value) {
      return value * 2;
    };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    let input = new Tree(1);
    let output = new Tree(2);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // expected values
    output.addChild(4);
    output.addChild(6);
    // depth: 2
    input.children[0].addChild(4);
    input.children[0].addChild(5);
    input.children[1].addChild(6);
    input.children[1].addChild(8);
    // expected values
    output.children[0].addChild(8);
    output.children[0].addChild(10);
    output.children[1].addChild(12);
    output.children[1].addChild(16);

    let result = input.map(double);
    verifyTree(result, output);
  });

  it("map 함수에 전달하는 매핑 함수가 값의 두배를 반환할 경우, 두배 값을 가진 트리가 반환됩니다. (depth 3)", function () {
    let double = function (value) {
      return value * 2;
    };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    let input = new Tree(1);
    let output = new Tree(2);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // expected values
    output.addChild(4);
    output.addChild(6);
    // depth: 2
    input.children[0].addChild(4);
    input.children[0].addChild(5);
    input.children[1].addChild(6);
    input.children[1].addChild(8);
    // expected values
    output.children[0].addChild(8);
    output.children[0].addChild(10);
    output.children[1].addChild(12);
    output.children[1].addChild(16);
    // depth: 3 (sparse)
    input.children[0].children[0].addChild(9);
    input.children[1].children[1].addChild(10);
    // expected values
    output.children[0].children[0].addChild(18);
    output.children[1].children[1].addChild(20);

    let result = input.map(double);
    verifyTree(result, output);
  });
});
