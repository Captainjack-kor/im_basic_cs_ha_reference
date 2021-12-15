/*
  아래는 여러분들이 참고해야 하는 코드입니다. pseudo-classical한 방법으로 작성된 클래스를 ES6 class 방법으로 다시 구현해내세요.
  다음과 같이 인스턴스를 생성할 수 있어야 합니다.

  let myHorse = new Horse()
  let myFlyingHorse = new FlyingHorse()

  HorseClass 및 FlyingHorseClass은 수정하지 마세요.
*/

let HorseClass = function (name) {
  this.name = name
}

HorseClass.prototype.goSomewhere = function (destination) {
  return `${this.name} is galloping to ${destination}!`
}

let FlyingHorseClass = function (name, color) {
  HorseClass.apply(this, [name])
  this.color = color;
}

FlyingHorseClass.prototype = Object.create(HorseClass.prototype)
FlyingHorseClass.prototype.constructor = FlyingHorseClass

FlyingHorseClass.prototype.goSomewhere = function (destination, milesToDestination) {
  if (milesToDestination < 10) {
    return HorseClass.prototype.goSomewhere.call(this, destination)
  } else {
    return `${this.name} is flying to ${destination}!`
  }
}

// 여기서부터는 여러분이 작성해야 하는 부분입니다
class Horse {
  constructor(name) {
    this.name = name
  }

  goSomewhere(destination) {
    return `${this.name} is galloping to ${destination}!`
  }
}

class FlyingHorse extends Horse {
  constructor(name, color) {
    super(name)
    this.color = color
  }

  goSomewhere(destination, milesToDestination) {
    if (milesToDestination < 10) {
      return super.goSomewhere(destination)
    } else {
      return `${this.name} is flying to ${destination}!`
    }
  }
}

module.exports = {
  Horse,
  FlyingHorse
}
