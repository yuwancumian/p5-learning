let values = [];
const len = 28;
let j = 0;
let i = 0;

function swap(arr, a, b) {
  console.log("swaped", arr);
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function setup() {
  createCanvas(800, 500);
  frameRate(5);
  for (let s = 0; s < len; s++) {
    values[s] = Math.floor(random(10, 360));
  }
}
function draw() {
  background(20);
  fill(255);
  let a = values[j];
  let b = values[j + 1];

  if (a > b) {
    swap(values, j, j + 1);
  }
  if (i < values.length) {
    // console.log("i", i);
    j = j + 1;
    if (j > values.length - i - 1) {
      j = 0;
      i = i + 1;
    }
  } else {
    noLoop();
  }

  for (let i = 0; i < len; i++) {
    rect(90 + i * 22, 400 - values[i], 20, values[i]);
  }
}
