// original source code
(function() {
  "use strict";

  /**
   * @type {constructor}
   */
  function Point(x, y) {
    this._x = x;
    this._y = y;
  }
  /**
   * @param {!Point}
   * @return {!number}
   */
  Point.prototype.distance = function (other) {
    /**
     * @param {!number} x
     * @return {!number}
     */
    function pow(x) {
      return x * x;
    }
    return Math.sqrt(
        pow(this._x - other._x) +
        pow(this._y - other._y));
  };
  /**
   * @return {!string}
   */
  Point.prototype.toString = function () {
    return "(" + this._x + "," + this._y + ")";
  };

  /** @type {!Point} */
  var one = new Point(-2, 1);
  
  /** @type {!Point} */
  var another = new Point(1, 5);

  console.log("Distance of " + one +
              " to " + another + ":");

  console.log(one.distance(another));
}());

// vim: set expandtab:
// vim: set tabstop=2:
