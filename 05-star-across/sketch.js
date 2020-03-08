const n = 400;
let stars = [];
function setup() {
  createCanvas(800, 600);
  // frameRate(6);
  for (let i = 0; i < n; i++) {
    stars[i] = new Star();
  }
}
function draw() {
  background(10);
  translate(width / 2, height / 2);
  for (let i = 0; i < n; i++) {
    stars[i].update();
    stars[i].show();
  }
}
