var Tree = require("./tree-map");
const expect = require("chai").expect;

const verifyTree = function(result, expectation) {
  expect(result).to.be.instanceOf(Tree);
  expect(result.value).to.equal(expectation.value);
  expect(result).not.to.equal(expectation);
  expect(result.children).to.have.length(expectation.children.length);

  for (var i = 0; i < result.children.length; i++) {
    verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
  }
};

describe("tree map", function() {
  it("should exist on the Tree prototype", function() {
    expect(Tree.prototype).to.have.property("map");
  });

  it("should be a function", function() {
    expect(Tree.prototype.map).to.be.an.instanceOf(Function);
  });

  it("should return a Tree instance", function() {
    var root = new Tree("root");
    var identity = function(value) {
      return value;
    };
    var result = root.map(identity);
    expect(result).to.be.an.instanceOf(Tree);
  });

  it("should return a new Tree instance, not the existing one (depth 0)", function() {
    var root = new Tree("root");
    var identity = function(value) {
      return value;
    };
    var result = root.map(identity);
    expect(result).not.to.equal(root);
  });

  it("should return a new Tree instance, not the existing one (depth 1)", function() {
    var root = new Tree("root");
    var child1 = root.addChild("child1");
    var child2 = root.addChild("child2");
    var identity = function(value) {
      return value;
    };
    var result = root.map(identity);
    expect(result).to.deep.equal(root);
    expect(result.children[0]).not.to.equal(child1);
    expect(result.children[1]).not.to.equal(child2);
  });

  it("should return an identical tree when the map function is identity (depth 0)", function() {
    // this "identity" function returns the same value that was passed in
    var identity = function(value) {
      return value;
    };
    // create a tree with some values
    // depth: 0
    var input = new Tree(1);

    var result = input.map(identity);
    // the input and output trees should have identical values
    verifyTree(result, input);
  });

  it("should return an identical tree when the map function is identity (depth 1)", function() {
    // this "identity" function returns the same value that was passed in
    var identity = function(value) {
      return value;
    };
    // create a tree with some values
    // depth: 0
    var input = new Tree(1);
    // depth: 1
    input.addChild(2);
    input.addChild(3);

    var result = input.map(identity);
    // the input and output trees should have identical values
    verifyTree(result, input);
  });

  it("should return an identical tree when the map function is identity (depth 2)", function() {
    // this "identity" function returns the same value that was passed in
    var identity = function(value) {
      return value;
    };
    // create a tree with some values
    // depth: 0
    var input = new Tree(1);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // depth: 2
    input.children[0].addChild(4);
    input.children[0].addChild(5);
    input.children[1].addChild(6);
    input.children[1].addChild(8);

    var result = input.map(identity);
    // the input and output trees should have identical values
    verifyTree(result, input);
  });

  it("should return an identical tree when the map function is identity (depth 3)", function() {
    // this "identity" function returns the same value that was passed in
    var identity = function(value) {
      return value;
    };
    // create a tree with some values
    // depth: 0
    var input = new Tree(1);
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

    var result = input.map(identity);
    // the input and output trees should have identical values
    verifyTree(result, input);
  });

  it("should return a tree with doubled values if the function doubles the value (depth 0)", function() {
    // this function doubles the value that was passed in
    var double = function(value) {
      return value * 2;
    };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    var input = new Tree(1);
    var output = new Tree(2);

    var result = input.map(double);
    verifyTree(result, output);
  });

  it("should return a tree with doubled values if the function doubles the value (depth 1)", function() {
    // this function doubles the value that was passed in
    var double = function(value) {
      return value * 2;
    };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    var input = new Tree(1);
    var output = new Tree(2);
    // depth: 1
    input.addChild(2);
    input.addChild(3);
    // expected values
    output.addChild(4);
    output.addChild(6);

    var result = input.map(double);
    verifyTree(result, output);
  });

  it("should return a tree with doubled values if the function doubles the value (depth 2)", function() {
    // this function doubles the value that was passed in
    var double = function(value) {
      return value * 2;
    };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    var input = new Tree(1);
    var output = new Tree(2);
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

    var result = input.map(double);
    verifyTree(result, output);
  });

  it("should return a tree with doubled values if the function doubles the value (depth 3)", function() {
    // this function doubles the value that was passed in
    var double = function(value) {
      return value * 2;
    };
    // create a tree with some values, and a tree with our *expected* output
    // depth: 0
    var input = new Tree(1);
    var output = new Tree(2);
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

    var result = input.map(double);
    verifyTree(result, output);
  });
});
