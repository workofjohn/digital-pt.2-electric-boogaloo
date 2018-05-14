function preload()
{

}
 
 
function setup() 
{  
  drum1 = loadSound('drum1.wav');
  drum2 = loadSound('drum2.wav');
  drum3 = loadSound('drum3.wav');
  drum4 = loadSound('drum4.wav');
  drum5 = loadSound('drum5.wav');
  drum6 = loadSound('drum6.wav');
  drum7 = loadSound('drum7.wav');
  base1 = loadSound('base1.wav');
  base2 = loadSound('base2.wav');
  base3 = loadSound('base3.wav');
  base4 = loadSound('base4.wav');
  base5 = loadSound('base5.wav');
  base6 = loadSound('base6.wav');
  base7 = loadSound('base7.wav');
  base8 = loadSound('base8.wav');
  base9 = loadSound('base9.wav');
  xtra1 = loadSound('xtra1.wav');
  xtra2 = loadSound('xtra2.wav');
  xtra3 = loadSound('xtra3.wav');
  xtra4 = loadSound('xtra4.wav');
  xtra5 = loadSound('xtra5.wav');
  xtra6 = loadSound('xtra6.wav');
  xtra7 = loadSound('xtra7.wav');
  xtra8 = loadSound('xtra8.wav');
  xtra9 = loadSound('xtra9.wav');
  xtra10 = loadSound('xtra10.wav');
  createCanvas(200, 200);
  
  // display instructions
  textAlign(CENTER);
  fill(100);
  noStroke();
  text("press any key to play sound", width/2, height/2);
}
 
function draw(){
}
 
function mousePressed() 
{
  background(random(255), random(255), random(255));
  
}


function keyTyped() {
  if (key === 'z') {
    drum2.play();
  } 
if (key === 'x') {
    drum3.play();
  }
  if (key === 'c') {
    drum4.play();
  }
  if (key === 'v') {
    drum5.play();
  }
  if (key === 'b') {
    drum6.play();
  }
  if (key === 'n') {
    drum7.play();
  }
  if (key === 'm') {
    drum1.play();
  }
  
   if (key === 'a') {
    base1.play();
  }
   if (key === 's') {
    base2.play();
  }
   if (key === 'd') {
    base3.play();
  }
   if (key === 'f') {
    base4.play();
  }
   if (key === 'g') {
    base5.play();
  }
   if (key === 'h') {
    base6.play();
  }
   if (key === 'j') {
    base7.play();
  }
   if (key === 'k') {
    base8.play();
  }
   if (key === 'l') {
    base9.play();
  }
     if (key === 'q') {
    xtra1.play();
  }
     if (key === 'w') {
    xtra2.play();
  } 
    if (key === 'e') {
    xtra3.play();
  }  
      if (key === 'r') {
    xtra4.play();
  }
      if (key === 't') {
    xtra5.play();
  }
     if (key === 'y') {
    xtra6.play();
  } 
      if (key === 'u') {
    xtra7.play();
  }
      if (key === 'i') {
    xtra8.play();
  }
      if (key === 'o') {
    xtra9.play();
  }
      if (key === 'p') {
    xtra10.play();
  }
  
}