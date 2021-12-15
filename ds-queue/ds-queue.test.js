var Queue = require('./ds-queue');
var should = require('chai').should();

describe('Queue', function() {
  it('should have an add method, and that method should be a function', function() {
    var myQueue = new Queue();
    myQueue.add.should.be.an.instanceOf(Function);
  });

  it('should have a remove method, and that method should be a function', function() {
    var myQueue = new Queue();
    myQueue.remove.should.be.an.instanceOf(Function);
  });

  it('should be able to add and then retreive that same item using add/remove', function() {
    var myQueue = new Queue();
    myQueue.add(5);
    var result = myQueue.remove();
    result.should.eql(5);
  });

  it('should always remove the earliest item to be added', function() {
    var myQueue = new Queue();
    myQueue.add(5);
    myQueue.add(6);
    myQueue.add(7);
    var result = myQueue.remove();
    result.should.eql(5);
  });

  it('should return undefined when there are no items', function() {
    var myQueue = new Queue();
    var result = myQueue.remove();
    should.equal(result, undefined);
    myQueue.add(5);
    myQueue.remove();
    result = myQueue.remove();
    should.equal(result, undefined);
  });

});
