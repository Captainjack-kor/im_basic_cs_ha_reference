/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/
var TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential'
};
exports.TimeComplexity = TimeComplexity;

// Problem 1: Sum the squares of the values in a given array.

/*
 * Complexity:
 */

exports.sumSquaresTimeComplexity = TimeComplexity.LINEAR; // TODO: Update this constant

var sumSquares = function(array) {
  return array.reduce(function(memo, val) {
    return memo + (Math.pow(val, 2));
  });
};


// Problem 2: Calculate the n-th power of given number.

/*
 * Complexity:
 */
/*START SOLUTION*///O(lg(exponent))/*END SOLUTION*/
exports.nthPowerTimeComplexity = TimeComplexity.LOGARITHMIC; // TODO: Update this constant

var nthPower = function(base, exponent) {
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


// Problem 3: Generate every sequence of throws for an n-round rock-paper-scissors game.

/*
 * Complexity:
 */
/*START SOLUTION*///O(3^n)/*END SOLUTION*/
exports.rockPaperScissorsTimeComplexity = TimeComplexity.EXPONENTIAL; // TODO: Update this constant

var rockPaperScissors = function(rounds) {
  var sequences = [];
  var plays = ['rock', 'paper', 'scissors'];

  var generate = function(sequence, round) {
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
