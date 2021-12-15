var printArray = require('./recursion-print-array');
var should = require('chai').should();

describe('Recursive Array Print', function() {
  it('printArray는 함수여야 합니다.', function () {
    printArray.should.be.an.instanceOf(Function);
  });
  it('순서대로 배열의 모든 항목을 console.log() 해야 합니다.', function () {
    var newArray = '';
    var oldLog = console.log;
    console.log = function(item) {
      newArray += item;
    };
    printArray([1, 2, ,[3, 4], 5]);
    console.log = oldLog;
    newArray.should.eql('12345');
  });
  it('빈 배열도 받아들일 수 있어야 합니다.', function () {
    (function() {
      printArray([]);
    }).should.not.throw();
  });
});
