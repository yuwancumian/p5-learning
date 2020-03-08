function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = width;
}
Star.prototype.show = function() {
  let sx = map(this.x / this.z, 0, 1, 0, width);
  let sy = map(this.y / this.z, 0, 1, 0, height);
  // console.log(sx, sy);
  // console.log(this.x);
  fill(255);
  ellipse(sx, sy, 8, 8);
};
Star.prototype.update = function() {
  this.z = this.z - 1;
};
