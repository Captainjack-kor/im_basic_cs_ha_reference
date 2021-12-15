var sport = require('./this-keyword');
var should = require('chai').should();

describe('sport.playerNames', function() {
  it('sport.playerNames은 메소드입니다.', function () {
    sport.playerNames.should.be.an.instanceof(Function);
  });

  it('텍스트가 담긴 배열을 리턴합니다.', function () {
    sport.playerNames()[0].should.eql('LeBron James plays basketball');
    sport.playerNames()[1].should.eql('Kevin Durant plays basketball');
  });
});
