/*
  사실 테스트 케이스만 보면, 즉시 답을 알 수 있는 그런 문제입니다. 그렇기 때문에 설명을 꼭 주석으로 달아주세요. 그래야 이 문제가 의미가 있습니다.
  예를 들어 다음과 같이 작성할 수 있습니다.
    - 이 함수는 (1____)의 시간 복잡도를 가지고 있습니다, 왜냐하면, (2____)번째 라인의 코드는 (3____)를 의미하기 때문입니다.

  1. Big-O 표기법 또는, 선형/로그 등으로 표시
  2. 코드 라인 범위를 적어주세요
  3. 구현의 특성을 설명하세요
*/

const TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential'
};
exports.TimeComplexity = TimeComplexity;

// 문제 1: 주어진 배열에 있는 값의 제곱을 더합니다.

/*
 * 복잡도:
 */

exports.sumSquaresTimeComplexity = TimeComplexity.LINEAR; // TODO: FIX_ME에 답을 적어주세요

let sumSquares = function (array) {
  return array.reduce(function(memo, val) {
    return memo + (Math.pow(val, 2));
  });
};


// 문제 2: 주어진 숫자의 n번째 거듭제곱을 계산합니다.

/*
 * 복잡도:
 */
exports.nthPowerTimeComplexity = TimeComplexity.LOGARITHMIC; // TODO: FIX_ME에 답을 적어주세요

let nthPower = function (base, exponent) {
  // Base case:
  if (exponent === 0) {
    return 1;
  // If exponent is odd
  } else if (exponent % 2 !== 0) {
    return base * nthPower(base, exponent - 1);
  // If exponent is even
  } else {
    return nthPower(base * base, exponent / 2);
  }
};


// Problem 3: n라운드의 가위바위보 게임을 위한 모든 경우의 수를 생성합니다.

/*
 * 복잡도:
 */
exports.rockPaperScissorsTimeComplexity = TimeComplexity.EXPONENTIAL; // TODO: FIX_ME에 답을 적어주세요

let rockPaperScissors = function (rounds) {
  let sequences = [];
  let plays = ['rock', 'paper', 'scissors'];

  let generate = function (sequence, round) {
    // Base case:
    if (round === rounds) {
      sequences.push(sequence);
    } else {
      plays.forEach(function(play) {
        generate(sequence.concat(play), round + 1);
      });
    }
  };

  generate([], 0);
  return sequences;
};
