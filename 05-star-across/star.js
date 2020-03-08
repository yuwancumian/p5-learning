function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
}
Star.prototype.show = function() {
  let sx = map(this.x / this.z, 0, 1, 0, width);
  let sy = map(this.y / this.z, 0, 1, 0, height);
  // console.log(sx, sy);
  // console.log(this.x);
  let r = map(this.z, 0, width, 16, 0);
  let px = map(this.x / this.pz, 0, 1, 0, width);
  let py = map(this.y / this.pz, 0, 1, 0, height);
  fill(255);
  ellipse(sx, sy, r, r);

  // this.pz = this.z;
  stroke(255);
  // line(px, py, sx, sy);
};
Star.prototype.update = function() {
  this.z = this.z - 20;
  // console.log(111, this.z);
  if (this.z < 1) {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    // console.log(222, this.pz);
  }
};
