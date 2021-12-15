// 다음과 같이 사용할 수 있어야 합니다

// sport.playerNames() 호출은
// ["Lebron James plays basketball", "Kevin Durant plays basketball"] 을 리턴합니다.

const FILL_ME_IN = undefined;

let sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function () {
    return this.players.map(p => `${p.name} plays ${this.name}`)
  }
};

module.exports = sport;