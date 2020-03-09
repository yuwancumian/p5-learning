let values = [];
const len = 28;
const cap = 2;
let c = 0;

function swap(arr, a, b) {
  console.log("swaped", arr);
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
  c++;
  console.log(c);
}
function setup() {
  createCanvas(800, 500);
  frameRate(1);
  for (let i = 0; i < len; i++) {
    values[i] = Math.floor(random(10, 360));
  }
}
function draw() {
  background(20);
  fill(255);
  for (var i = 0; i < len; i++) {
    // console.log(values[i]);
    rect(90 + i * 22, 400 - values[i], 20, values[i]);
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      // console.log(i);
      var a = values[j];
      var b = values[j + i];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  }
}
