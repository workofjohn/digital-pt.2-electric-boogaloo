function setup() {
  createCanvas(1050, 500);

}

function draw() {
  
}



function mouseDragged() 
{    var b = random(70,255);
    var r = random(70,155);
    var g = random(70,255);
  stroke(r, g, b);
strokeWeight(3);
	line(mouseX, mouseY, pmouseX, pmouseY);
	line(1050-mouseX, mouseY, 1050-pmouseX, pmouseY);
	line(mouseX, 500-mouseY, pmouseX, 500-pmouseY);
	line(1050-mouseX, 500-mouseY, 1050-pmouseX, 500-pmouseY);
}

function keyTyped() {
  if (key === 'x') {
    clear();
  } 
}