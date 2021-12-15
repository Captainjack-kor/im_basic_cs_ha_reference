const {
  original,
  getChanged
} = require('./destructing')
const should = require('chai').should()

describe('destructing', function () {
  it('변경된 객체는 다음과 같은 형태로 변경되어야 합니다.', function () {
    getChanged().should.eql({
      name: '김코딩',
      company: {
        name: 'Code States',
        skill: ['Development', 'Writing'],
        role: {
          name: 'Software Engineer'
        }
      },
      age: 35
    })
  })

  it('original 객체는 변경이 없어야 합니다.', function () {
    original.should.eql({
      name: '김코딩',
      company: {
        name: 'Unemployed',
        skill: ['Development', 'Writing'],
        role: {
          name: 'Software Engineer'
        }
      },
      age: 35
    })
  })

  it('original 객체와 변경된 객체는 서로 다른 참조를 갖고 있습니다.', function () {
    original.should.not.equal(getChanged())
  })

  it('변경된 객체는 original 객체를 이용하며, spread/rest syntax를 사용해야 합니다.', function () {
    let implement = getChanged.toString()

    implement.should.not.include('김코딩')
    implement.should.not.include('Development')
    implement.should.not.include('Writing')
    implement.should.not.include('Software Engineer')

    implement.match(/\.{3}original/g).should.lengthOf(2)
  })
})
