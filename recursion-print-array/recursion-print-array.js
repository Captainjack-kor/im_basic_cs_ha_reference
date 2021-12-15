const printArray = function (...args) {
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

  _print(args[0]);
};

module.exports = printArray;