(function() {
  function a(d, a) {
    this._x = d;
    this._y = a
  }
  a.prototype.distance = function(a) {
    return Math.sqrt((this._x - a._x) * (this._x - a._x) + (this._y - a._y) * (this._y - a._y))
  };
  a.prototype.toString = function() {
    return"(" + this._x + "," + this._y + ")"
  };
  var b = new a(-2, 1), c = new a(1, 5);
  console.log("Distance of " + b + " to " + c + ":");
  console.log(b.distance(c))
})();

//@ sourceMappingURL=foo.js.mapping
