const Queue = require('./ds-queue');
const should = require('chai').should();

describe('Queue', function() {
  it('add 메소드가 존재해야 합니다.', function () {
    let myQueue = new Queue();
    myQueue.add.should.be.an.instanceOf(Function);
  });

  it('remove 메소드가 존재해야 합니다.', function () {
    let myQueue = new Queue();
    myQueue.remove.should.be.an.instanceOf(Function);
  });

  it('add 후 remove한 결과를 통해 같은 아이템을 조회할 수 있어야 합니다.', function () {
    let myQueue = new Queue();
    myQueue.add(5);
    let result = myQueue.remove();
    result.should.eql(5);
  });

  it('remove는 항상 먼저 추가한 아이템을 삭제해야 합니다.', function () {
    let myQueue = new Queue();
    myQueue.add(5);
    myQueue.add(6);
    myQueue.add(7);
    let result = myQueue.remove();
    result.should.eql(5);
  });

  it('Queue에 아무런 아이템도 없을 경우, remove시 undefined가 리턴되어야 합니다.', function () {
    let myQueue = new Queue();
    let result = myQueue.remove();
    should.equal(result, undefined);
    myQueue.add(5);
    myQueue.remove();
    result = myQueue.remove();
    should.equal(result, undefined);
  });

});
