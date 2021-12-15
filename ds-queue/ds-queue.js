const Queue = function () {
  this._storage = {}
  this.firstIndex = 0
  this.length = 0
};

Queue.prototype.add = function (item) {
  this._storage[this.length + this.firstIndex] = item
  this.length++
};

Queue.prototype.remove = function() {
  if (this.length <= 0) {
    return undefined
  }

  let removeItem = this._storage[this.firstIndex]
  delete this._storage[this.firstIndex]

  this.firstIndex++
  this.length--

  return removeItem;
};

module.exports = Queue;