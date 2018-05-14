function setup() {

createCanvas(1150,500);
}

function draw() {
}

function mouseDragged(){
var r = random(255);
var g = random(255);
var b = random(255);
//var x = random(2,30);
//var y = random(2,30);
  fill(r,g,b);
  noStroke();
  ellipse(mouseX, mouseY,10,10)
}


function keyTyped() {
  if (key === 'x') {
    clear();
  } 
}