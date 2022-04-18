var rectOver = false;
var circleOver = false;
var highlight;
var screenColor;
var offColor;
var onColor;
var cx, cy;
var cspeed;

function setup() {
  createCanvas(400, 400);
  highlight = color(51);
  offColor = color(0);
  onColor = color(5, 10, 254);
  screenColor = offColor;
  cx = 120;
  cy = 95;
  cspeed = 3;
}

function draw() {
  update(mouseX, mouseY);
  background(220);
  
  //tv frame
  fill(139, 69, 19);
  rect(50, 50, 300, 300);
  
  //tv screen
  fill(screenColor);
  rect(80, 80, 240, 240);
  
  //on button
  if(circleOver){
    fill(highlight);
  }else{
    fill(0);
  }
  ellipse(100, 335, 20);
  fill(255);
  text("on", 93, 340);
    
  
  //off button
  if(rectOver){
    fill(highlight);
  }else{
    fill(0);
  }
  rect(295, 325, 20, 20);
  fill(255);
  text("Off", 297, 340);
  
  //channel search
  if(screenColor == onColor){
       fill(0, 200, 0);
      rect(80, 80, 240, 30);
    
    fill(255);
    text("Searching for Channels", 135, 100);
    
    fill(0);
    ellipse(cx,cy,20,20);
    cx+= cspeed;  
  
  if(cx-10 <= 80 || cx+10>318){  
    cspeed *= -1; 
  }
    
     }
}//end draw

function update( x,  y) {
  if ( overCircle(100, 335, 20) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(295, 325, 20, 20) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
  
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
    
}

function mousePressed() {
  if (circleOver) {
    screenColor = onColor; 
  }
  
  if (rectOver) {
    screenColor = offColor;
  }
}