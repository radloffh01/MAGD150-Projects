function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#200A3D');
  
  //top half of ring
  fill(250, 137, 235, 98);
  bezier(125, 200, 0, 150, 0, 100, 275, 200);
  
  //top half of planet
  push();
  noStroke();
  fill(250, 63, 47);
  ellipse(200,200,150,150);
  pop();
  
  //bottom half of planet
  fill(42, 221, 247); 
  arc(200, 200, 150, 150, 0, PI);
  
  //triangle design in planet
  push();
  colorMode(HSB);
  fill(188, 83, 97);
  noStroke();
  beginShape();
  vertex(150, 150);
  vertex(250, 150);
  vertex(200, 200);
  endShape(CLOSE);
  pop();
  
  //bottom half of ring
  //noFill();
  fill(250, 137, 235, 98);
  bezier(125, 200, 400, 300, 400, 300, 275, 200);
  
  //moon in distance
  push();
  noStroke();
  fill(203, 176, 250);
  ellipse(300, 50, 25, 25);
  pop();
  
}