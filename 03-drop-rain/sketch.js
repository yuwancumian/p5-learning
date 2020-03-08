let drops = [];
function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 200; i++) {
    drops[i] = new Drop();
  }
}
function draw() {
  fill(255);
  background(10);
  for (let i = 0; i < 200; i++) {
    drops[i].show();
    drops[i].move();
  }
}
