function setup() {
  createCanvas(600, 600);
  console.log("map" in window);
  const value = 6;
  console.log(map(value, 5, 10, 0, 20)); // 100
}
function draw() {
  background(250);
}
