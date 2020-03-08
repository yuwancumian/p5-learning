function Drop() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.z = random(0, 20);
  this.ySpeed = map(this.z, 0, 20, 4, 10);
  this.length = map(this.z, 0, 20, 10, 20);
}
Drop.prototype.show = function() {
  let tick = map(this.z, 0, 20, 1, 3);
  strokeWeight(tick);
  line(this.x, this.y, this.x, this.y + length);
  stroke(255);
};
Drop.prototype.move = function() {
  this.y = this.y + this.ySpeed;
  this.ySpeed = this.ySpeed + 0.1;
  if (this.y > height) {
    this.y = random(-100, -200);
    this.ySpeed = random(4, 8);
  }
};
