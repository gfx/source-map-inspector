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

//@ sourceMappingURL=data:application/json;base64,ewoidmVyc2lvbiI6MywKImZpbGUiOiIiLAoibGluZUNvdW50IjoxNSwKIm1hcHBpbmdzIjoiQUFDQyxTQUFRLEVBQUc7QUFNVkEsVUFBU0EsRUFBSyxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBTztBQUNuQixRQUFBQyxHQUFBLEdBQVVGLENBQ1Y7UUFBQUcsR0FBQSxHQUFVRixDQUZTO0dBQXJCRjtBQVFBQSxHQUFBSyxVQUFBQyxTQUFBLEdBQTJCQyxRQUFTLENBQUNDLENBQUQsQ0FBUTtBQVExQyxVQUFPQyxLQUFBQyxLQUFBLEVBQ0MsSUFBQVAsR0FERCxHQUNXSyxDQUFBTCxHQURYLEtBQ0MsSUFBQUEsR0FERCxHQUNXSyxDQUFBTCxHQURYLEtBRUMsSUFBQUMsR0FGRCxHQUVXSSxDQUFBSixHQUZYLEtBRUMsSUFBQUEsR0FGRCxHQUVXSSxDQUFBSixHQUZYLEVBUm1DO0dBZTVDSjtHQUFBSyxVQUFBTSxTQUFBLEdBQTJCQyxRQUFTLEVBQUc7QUFDckMsVUFBTyxHQUFQLEdBQWEsSUFBQVQsR0FBYixHQUF1QixHQUF2QixHQUE2QixJQUFBQyxHQUE3QixHQUF1QyxHQURGO0dBS3ZDO01BQUlTLElBQVUsSUFBQWIsQ0FBQSxDQUFPLEVBQVAsRUFBVSxDQUFWLENBQWQsRUFHSWMsSUFBYyxJQUFBZCxDQUFBLENBQU0sQ0FBTixFQUFTLENBQVQsQ0FFbEJlO1NBQUFDLElBQUEsQ0FBWSxjQUFaLEdBQTZCSCxDQUE3QixHQUNZLE1BRFosR0FDcUJDLENBRHJCLEdBQytCLEdBRC9CLENBR0FDO1NBQUFDLElBQUEsQ0FBWUgsQ0FBQVAsU0FBQSxDQUFhUSxDQUFiLENBQVosQ0ExQ1U7Q0FBWCxDQUFBOyIsCiJzb3VyY2VzIjpbImZvby5qcyJdLAoibmFtZXMiOlsiUG9pbnQiLCJ4IiwieSIsIl94IiwiX3kiLCJwcm90b3R5cGUiLCJkaXN0YW5jZSIsIlBvaW50LnByb3RvdHlwZS5kaXN0YW5jZSIsIm90aGVyIiwiTWF0aCIsInNxcnQiLCJ0b1N0cmluZyIsIlBvaW50LnByb3RvdHlwZS50b1N0cmluZyIsIm9uZSIsImFub3RoZXIiLCJjb25zb2xlIiwibG9nIl0KfQo=
