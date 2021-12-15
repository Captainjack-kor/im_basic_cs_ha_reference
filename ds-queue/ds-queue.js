/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this.storage = {};
  this.firstIndex = 0;
  this.length = 0;
};

Queue.prototype.add = function(item) {
  this.storage[this.length + this.firstIndex] = item;
  this.length++;
};

Queue.prototype.remove = function() {
  if (this.length <= 0) {
    return undefined;
  }

  let rmvItem = this.storage[this.firstIndex];

  delete this.storage[this.firstIndex];
  this.firstIndex++;
  this.length--;

  return rmvItem;
};

module.exports = Queue;
