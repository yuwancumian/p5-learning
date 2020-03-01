var x = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(1200);
}
function draw() {
  background("#1bb1f5");
  fill("#c1ff3e");
  ellipse(x, 50, 50, 50);
  x = x + 15;
  // 无限循环
  if (x > 400) {
    x = 0;
  }
}
