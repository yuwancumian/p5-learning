const n = 100;
let stars = [];
function setup() {
  createCanvas(400, 400);
  // frameRate(6);
  for (let i = 0; i < n; i++) {
    stars[i] = new Star();
  }
}
function draw() {
  background(10);
  translate(width / 2, height / 2);
  for (let i = 0; i < n; i++) {
    stars[i].show();
    stars[i].update();
  }
}
