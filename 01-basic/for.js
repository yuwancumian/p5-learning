function setup() {
  createCanvas(200, 200);
  background("#1bb1f5");
}
function draw() {
  var t1 = createVector(10, 40);
  var t2 = createVector(411, 500);
  line(t1.x, t1.y, t2.x, t2.y);
  translate(12, 54);
  line(t1.x, t1.y, t2.x, t2.y);

  for (var i = 20; i < 400; i += 40) {
    line(i, 40, i + 40, 80);
  }
}
