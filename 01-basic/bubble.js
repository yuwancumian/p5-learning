let bubbles = [];
let b;
function Bubble (x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
Bubble.prototype.display = function() {
    ellipse(this.x, this.y, this.r)
}
Bubble.prototype.move = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
}
function mousePressed () {
    let r = random(10,40);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    console.log('clicked')
}
function setup(){
    createCanvas(400,400)
    // for(var i=0; i< 10; i++) {
    //     var x = random(width);
    //     var y = random(height);
    //     var r = random(20,40)
    //     bubbles[i] = new Bubble(x,y,r);
    // }
}
function draw() {
    background(25)
    // ellipse(30,30,50)   
    // console.log('b', b)
    // console.log(bubbles[1])
    // b.display();
    console.log(bubbles)
    for (let i = 0; i< bubbles.length; i++) {
        bubbles[i].display();
        bubbles[i].move();
    }
}
