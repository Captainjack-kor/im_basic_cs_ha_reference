var printArray = require('./recursion-print-array');
var should = require('chai').should();

describe('Recursive Array Print', function() {
  it('should be something called printArray, and that thing should be a function', function() {
    printArray.should.be.an.instanceOf(Function);
  });
  it('should console.log() all of the items in the array, in order', function() {
    var newArray = '';
    var oldLog = console.log;
    console.log = function(item) {
      newArray += item;
    };
    printArray([1, 2, ,[3, 4], 5]);
    console.log = oldLog;
    newArray.should.eql('12345');
  });
  it('should be able to accept an empty array', function() {
    (function() {
      printArray([]);
    }).should.not.throw();
  });
});
