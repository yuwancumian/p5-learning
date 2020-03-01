var s;
var scl = 10;
var food;

function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(10);
  s = new Snake();
}
function draw() {
  background("#1bb1f5");
  s.update();
  s.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }
}
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.update = function() {
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };
  this.show = function() {
    fill(0);
    rect(this.x, this.y, 10, 10);
  };
  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  };
}
