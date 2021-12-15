const should = require('chai').should();
const {
  sumSquaresTimeComplexity,
  nthPowerTimeComplexity,
  rockPaperScissorsTimeComplexity,
  TimeComplexity
} = require('./algo-complexity');


describe('algorithm time complexity', function() {
  it('sumSquaresTimeComplexity 함수는 \'LINEAR\' 시간 복잡도를 갖습니다.', function () {
    sumSquaresTimeComplexity.should.equal(TimeComplexity.LINEAR);
  });

  it('nthPowerTimeComplexity 함수는 \'LOGARITHMIC\' 시간 복잡도를 갖습니다.', function () {
    nthPowerTimeComplexity.should.equal(TimeComplexity.LOGARITHMIC);
  });

  it('rockPaperScissorsTimeComplexity 함수는 \'EXPONENTIAL\' 시간 복잡도를 갖습니다. ', function () {
    rockPaperScissorsTimeComplexity.should.equal(TimeComplexity.EXPONENTIAL);
  });
});
