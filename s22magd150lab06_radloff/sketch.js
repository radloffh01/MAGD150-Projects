var clx, cly, carx, cary;
var cloudScale;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(55, 205, 255);
  //creates the ground
  fill(0, 200, 0);
  rect(0, 250, 400, 250);
  //this creates the sun by using translate to have the x equal 200, which is width/2
  push();
  fill(235, 232, 30);
  translate(width/2, height/2);
  rectMode(CENTER);
  rect(0, -175, 40, 40);
  pop();
  
  cloud();
  cloud();
  cloud();
  
  //this group of code creates the road on which the car is placed
  push();
  stroke(0);
  line(275, 250, 350, 400);
  line(125, 250, 50, 400);
  fill(5);
  quad(125, 250, 275, 250, 350, 400, 50, 400);
  translate(width/2, height/2);
  rectMode(CENTER);
  fill(255);
  rect(0, 75, 10, 35);
  rect(0, 175, 15, 45);
  pop();
  
  car();
  noLoop();
}
//this function creates a cloud and scales the top part of the cloud to make it different from the rest of the clouds
function cloud(){
  randomCloud();
  noStroke();
  fill(255);
  rect(clx, cly, 50, 20);
  rect(clx+15, cly-20, 20*cloudScale, 20);
}
//this function creates the car and rotates it depending on what //side of the road it is on
function car(){
  randomCar();
  if(carx > 200){
    rotate(-0.05);
  }else{
    rotate(0.05);
  }
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(carx, cary, 50, 75);
  fill(100);
  rect(carx+35, cary+30, 20, 20);
  rect(carx-35, cary+30, 20, 20);
  rect(carx+30, cary -30, 10, 10);
  rect(carx-30, cary-30, 10, 10);
  fill(0, 0, 50);
  rect(carx, cary, 30, 30);
  
}
//this funciton randomizes where the cloud will be on the screen with restrictions having being only in the sky
function randomCloud(){
  push();
  clx = round(random(100, 300));
  cly = round(random(0, 225));
  cloudScale = random(0.5, 2);
  scale(cloudScale);
  pop();
}
//this function randomizes where the car will be, with restictions of having only be on the bottom half of the canvas and having go a little bit off the road
function randomCar(){
  carx = round(random(70, 320));
  cary = 350;
}