const should = require('chai').should();
const {
  Horse,
  FlyingHorse
} = require('./js-inheritance');

describe('Horse', function () {
  it('생성자로 호출 가능해야 합니다.', function () {
    let unnamedHorse = new Horse();
    unnamedHorse.should.be.an.instanceof(Horse);
    unnamedHorse.should.not.be.an.instanceof(FlyingHorse);
  });

  it('name 속성이 존재해야 합니다.', function () {
    let princess = new Horse('Princess Twilight Sparkle');
    princess.should.have.property('name');
  });

  it('name은 생성자에서 설정이 가능해야 합니다.', function () {
    let name = 'Princess Twilight Sparkle';
    let princess = new Horse(name);
    princess.name.should.be.equal(name);
  });

  it('goSomewhere 메소드가 존재해야 합니다.', function () {
    let name = 'Princess Twilight Sparkle';
    let princess = new Horse(name);
    princess.should.have.property('goSomewhere');
    let destination = 'home';
    let result = princess.goSomewhere('home');
    result.should.equal(name + ' is galloping to ' + destination + '!');
  });


  it('각각의 인스턴스에 대해 메소드가 매번 새로 작성되는 것이 아닙니다.', function () {
    let princess = new Horse('Princess Twilight Sparkle');
    let fluttershy = new Horse('Fluttershy');
    princess.goSomewhere.should.equal(fluttershy.goSomewhere);
    // 메소드는 프로토타입에 존재하며, 동일한 함수를 참조합니다. 다음 테스트케이스에서 정말 그런지 확인해봅시다.
  });

  it('Horse 프로토타입으로부터 goSomewhere 메소드를 가져와야 합니다.', function () {
    let princess = new Horse('Princess Twilight Sparkle');
    let fluttershy = new Horse('Fluttershy');
    princess.goSomewhere.should.equal(Horse.prototype.goSomewhere);
    fluttershy.goSomewhere.should.equal(Horse.prototype.goSomewhere);
  });
});

describe('FlyingHorse', function () {
  it('생성자로 호출 가능해야 합니다.', function () {
    let unnamedFlyingHorse = new FlyingHorse();
    should.exist(unnamedFlyingHorse);
    unnamedFlyingHorse.should.be.an.instanceof(FlyingHorse);
    // 날아다니는 말(FlyingHorse)역시 모두 말(Horse)입니다.
    unnamedFlyingHorse.should.be.an.instanceof(Horse);
  });

  it('name 및 color 속성이 존재해야 합니다.', function () {
    let princess = new FlyingHorse('Princess Twilight Sparkle', 'purple');
    princess.should.have.property('name');
    princess.should.have.property('color');
  });

  it('name 및 color 속성은 생성자에서 설정이 가능해야 합니다.', function () {
    let name = 'Princess Twilight Sparkle';
    let myColor = 'purple';
    let princess = new FlyingHorse(name, myColor);
    princess.name.should.be.equal(name);
    princess.color.should.be.equal(myColor);
  });

  it('goSomewhere 메소드가 존재해야 합니다.', function () {
    let name = 'Princess Twilight Sparkle';
    let princess = new FlyingHorse(name);
    princess.should.have.property('goSomewhere');
    let destination = 'home';
    let distance = 5;
    // 말이 질주합니다.
    let result = princess.goSomewhere(destination, distance);
    result.should.equal(name + ' is galloping to ' + destination + '!');
  });

  it('goSomewhere 메소드를 이용해 말이 날아가야 합니다!', function () {
    let name = 'Princess Twilight Sparkle';
    let princess = new FlyingHorse(name);
    princess.should.have.property('goSomewhere');
    let destination = 'valhalla';
    let distance = 15;
    // 말이 날아갑니다!
    let result = princess.goSomewhere(destination, distance);
    result.should.equal(name + ' is flying to ' + destination + '!');
  });

  it('각각의 인스턴스에 대해 메소드가 매번 새로 작성되는 것이 아닙니다.', function () {
    let unnamedFlyingHorse = new FlyingHorse();
    let anotherUnnamedFlyingHorse = new FlyingHorse();
    unnamedFlyingHorse.goSomewhere.should.equal(anotherUnnamedFlyingHorse.goSomewhere);
  });

  it('Horse의 goSomewhere 메소드는, 상속에 의해 오버라이드 됩니다.', function () {
    let unnamedFlyingHorse = new FlyingHorse();
    let unnamedHorse = new Horse();
    unnamedFlyingHorse.goSomewhere.should.not.equal(unnamedHorse.goSomewhere);

    unnamedFlyingHorse.goSomewhere.toString().should.includes('super')
  });

  it('goSomewhere 메소드는 FlyingHorse 프로토타입으로부터 가져와야 합니다.', function () {
    let unnamedFlyingHorse = new FlyingHorse();
    unnamedFlyingHorse.goSomewhere.should.equal(FlyingHorse.prototype.goSomewhere);
  });
});
