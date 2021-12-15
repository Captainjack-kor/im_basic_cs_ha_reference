const original = {
  name: '김코딩',
  company: {
    name: 'Unemployed',
    skill: ['Development', 'Writing'],
    role: {
      name: 'Software Engineer'
    }
  },
  age: 35
}

const getChanged = () => {
  return {
    ...original,
    company: {
      ...original.company,
      name: 'Code States'
    }
  }
}

module.exports = {
  original,
  getChanged
}