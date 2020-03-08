let x;
let y;
let r, g, b;

let xSpeed;
let ySpeed;
let dvd;

function preload() {
  dvd = loadImage("dvd-logo.png");
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}
function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 300;
  xSpeed = 2;
  ySpeed = 2;
}
function draw() {
  background(25);
  tint(r, g, b);
  image(dvd, x, y, 128, 72);

  x = x + xSpeed;
  y = y + ySpeed;
  if (x + 128 == width || x == 0) {
    xSpeed = xSpeed * -1;
    pickColor();
  }
  if (y + 72 == height || y == 0) {
    ySpeed = ySpeed * -1;
    pickColor();
  }
}
