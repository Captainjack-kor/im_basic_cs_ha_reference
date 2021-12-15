const should = require('chai').should();
const {
  sumSquaresTimeComplexity,
  nthPowerTimeComplexity,
  rockPaperScissorsTimeComplexity,
  TimeComplexity
} = require('./algo-complexity');


describe('algorithm time complexity', function() {
  it('should be \'LINEAR\' for sumSquaresTimeComplexity', function() {
    sumSquaresTimeComplexity.should.equal(TimeComplexity.LINEAR);
  });

  it('should be \'LOGARITHMIC\' for nthPowerTimeComplexity', function() {
    nthPowerTimeComplexity.should.equal(TimeComplexity.LOGARITHMIC);
  });

  it('should be \'EXPONENTIAL\' for rockPaperScissorsTimeComplexity', function() {
    rockPaperScissorsTimeComplexity.should.equal(TimeComplexity.EXPONENTIAL);
  });
});
