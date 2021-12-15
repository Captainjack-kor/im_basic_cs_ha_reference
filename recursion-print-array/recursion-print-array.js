/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function() {
  function _print(targetArr) {
    if (targetArr.length === 0) {
      return;
    } else {
      let temp = targetArr[0];

      if (Array.isArray(temp)) {
        _print(temp);
        _print(targetArr.slice(1));
      } else if (temp) {
        console.log(temp);
        _print(targetArr.slice(1));
      } else {
        _print(targetArr.slice(1));
      }
    }
  }

  _print(arguments[0]);
};

module.exports = printArray;
