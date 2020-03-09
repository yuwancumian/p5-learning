var x = 3;
var y = 5;
function setup() {
    createCanvas(400, 400)
    fill(255)
}

function draw() {
    background(200, 0, 200)
    for (var i = 100; i< 100 + x*20 ; i+=20) {
        // x = 100 + i * 50; 
        console.log(x);
        rect(i, 20, 20,20);
    }
}
