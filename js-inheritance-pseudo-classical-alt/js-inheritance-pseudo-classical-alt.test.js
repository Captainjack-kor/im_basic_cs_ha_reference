const should = require('chai').should();
const {
  Horse,
  FlyingHorse
} = require('./js-inheritance-pseudo-classical-alt');

describe('Horse', function() {
  it('should be should be callable as a constructor', function() {
    var unnamedHorse = new Horse();
    unnamedHorse.should.be.an.instanceof(Horse);
    // a horse is not necessarily a flying horse
    unnamedHorse.should.not.be.an.instanceof(FlyingHorse);
  });

  it('should have a `name` property', function() {
    var princess = new Horse('Princess Twilight Sparkle');
    princess.should.have.property('name');
  });

  it('should allow name to be set in the constructor', function() {
    var name = 'Princess Twilight Sparkle';
    var princess = new Horse(name);
    princess.name.should.be.equal(name);
  });

  it('should have a method `goSomewhere`', function() {
    var name = 'Princess Twilight Sparkle';
    var princess = new Horse(name);
    princess.should.have.property('goSomewhere');
    var destination = 'home';
    var result = princess.goSomewhere('home');
    //should get back a message about galloping
    result.should.equal(name + ' is galloping to ' + destination + '!');
  });


  it('should not re-create new methods for each new instance', function() {
    //This works, btw, because objects are passed by reference. So if two
    // functions are actually sharing the method, then a look up on both
    // instances will literally be the same object (triple equals). This is NOT
    // asserting that they simply have the same text in the function.
    var princess = new Horse('Princess Twilight Sparkle');
    var fluttershy = new Horse('Fluttershy');
    princess.goSomewhere.should.equal(fluttershy.goSomewhere);
  });

  it('should get its `goSomewhere` method from the Horse prototype', function() {
    var unnamedHorse = new Horse();
    unnamedHorse.goSomewhere.should.equal(Horse.prototype.goSomewhere);
  });
});

describe('FlyingHorse', function() {
  it('should be callable as a constructor', function() {
    var unnamedFlyingHorse = new FlyingHorse();
    should.exist(unnamedFlyingHorse);
    unnamedFlyingHorse.should.be.an.instanceof(FlyingHorse);
    //all flying horses are horses. make sure FlyingHorse's prototype is a Horse
    unnamedFlyingHorse.should.be.an.instanceof(Horse);
  });

  it('should have a `name` and a `color` property', function() {
    var princess = new FlyingHorse('Princess Twilight Sparkle', 'purple');
    princess.should.have.property('name');
    princess.should.have.property('color');
  });

  it('should allow the `name` and `color` roperties to be set in the constructor', function() {
    var name = 'Princess Twilight Sparkle';
    var myColor = 'purple';
    var princess = new FlyingHorse(name, myColor);
    princess.name.should.be.equal(name);
    princess.color.should.be.equal(myColor);
  });

  it('should have a method `goSomewhere`', function() {
    var name = 'Princess Twilight Sparkle';
    var princess = new FlyingHorse(name);
    princess.should.have.property('goSomewhere');
    var destination = 'home';
    var distance = 5;
    // Try to gallop somewhere close
    var result = princess.goSomewhere(destination, distance);
    result.should.equal(name + ' is galloping to ' + destination + '!');
  });

  it('should have a `goSomewhere` method that can flies!', function() {
    var name = 'Princess Twilight Sparkle';
    var princess = new FlyingHorse(name);
    princess.should.have.property('goSomewhere');
    var destination = 'valhalla';
    var distance = 15;
    // Try to fly somewhere far away
    var result = princess.goSomewhere(destination, distance);
    result.should.equal(name + ' is flying to ' + destination + '!');
  });

  it('should not re-create new methods for each instance', function() {
    // This works, btw, because objects are passed by reference. So if two
    // functions are actually sharing the method, then a look up on both
    // instances will literally be the same object (triple equals). This is NOT
    // asserting that they simply have the same text in the function.
    var unnamedFlyingHorse = new FlyingHorse();
    var anotherUnnamedFlyingHorse = new FlyingHorse();
    unnamedFlyingHorse.goSomewhere.should.equal(anotherUnnamedFlyingHorse.goSomewhere);
  });

  it('should override `Horse`s `goSomewhere()` method', function() {
    var unnamedFlyingHorse = new FlyingHorse();
    var unnamedHorse = new Horse();
    unnamedFlyingHorse.goSomewhere.should.not.equal(unnamedHorse.goSomewhere);
  });

  it('should not allow access to `Horse.prototype.goSomewhere` method directly', function() {
    // The original makeFlyingHorse constructor function does not create an instance
    // where the Horse goSomewhere can be accessed directly. This works by looping
    // through all properties on the FlyingHorse instance and seeing if any of them
    // contain a reference to Horse.prototype.goSomewhere.

    var name = 'Princess Twilight Sparkle';
    var myColor = 'purple';
    var princess = new FlyingHorse(name, myColor);

    for (var key in princess) {
      princess[key].should.not.equal(Horse.prototype.goSomewhere);
    }
  });

  it('should get its `goSomewhere` method from the FlyingHorse prototype', function() {
    var unnamedFlyingHorse = new FlyingHorse();
    unnamedFlyingHorse.goSomewhere.should.equal(FlyingHorse.prototype.goSomewhere);
  });
});
