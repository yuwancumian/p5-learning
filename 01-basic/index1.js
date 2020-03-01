var g = 10;
var b;
function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(5);
  b = new Box();
}
function draw() {
  background("#1bb1f5");
  b.update();
  b.show();
}

function Box() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.update = function() {
    this.x = this.x + 10;
    // this.y = this.y + 1;
  };
  this.show = function() {
    fill(0);
    rect(this.x, this.y, 10, 10);
  };
}
