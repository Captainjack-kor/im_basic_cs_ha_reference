var sport = require('./this-keyword');
var should = require('chai').should();

describe('sport.playerNames', function() {
  it('should be a function', function() {
    sport.playerNames.should.be.an.instanceof(Function);
  });

  it('should return correct results', function() {
    sport.playerNames()[0].should.eql('LeBron James plays basketball');
    sport.playerNames()[1].should.eql('Kevin Durant plays basketball');
  });
});
