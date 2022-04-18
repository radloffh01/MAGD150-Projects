/*the fading effect was not my own and I owe credit to remarkability
https://editor.p5js.org/remarkability/sketches/rtM08miUD*/
var lemon;
var lemonItalic;
var manbat1;
var manbat2;
var batman;
var pdf;
var fade;
var fadeAmount = 1;

//the preload functions preloads all assets being used in the image
//so the code runs without any errors
function preload(){
  lemon = loadFont("LEMONMILK-Regular.otf");
  lemonItalic = loadFont("LEMONMILK-BoldItalic.otf");
  manbat1 = loadImage("ManBat_image1.jpg");
  manbat2 = loadImage("ManBat_image2.jpg");
  batman = loadStrings("batman.txt");
}

//sets up the canvas and creates a pdf varaible so that the image can
//be printed as a pdf
function setup() {
  createCanvas(500, 400, P2D );
  fill(255);
  pdf = createPDF();
    pdf.beginRecord();
  fade = 0;
}

function draw() {
  
  //adds the top image into the canvas with a red tint, and the 
  //image resized to fit the canvas better
  background(220);
  push();
  manbat2.resize(500, 250);
  tint(255, 0, 0);
  image(manbat2, 0, 0);
  pop();
  
  //adds the text "The ManBat" to the canvas postioned in the center
  //of the canvas with "the" in lemonMilk italic font and "ManBat"
  //in lemonMilk font
  textAlign(CENTER);
  textSize(32);
  textFont(lemon);
  fill(255);
  text("ManBat", width/2, 120);
  textFont(lemonItalic);
  text("The", width/2, 90);
  
  //adds the bottom image to the canvas with a gray fitler, higly 
  //contrasting the top image which is tinted red
  manbat1.resize(500, 250);
  manbat1.filter(GRAY);
  image(manbat1, 0, 150);
  
  //adds the batman.txt text to the canvas and is animated to have
  //the text fade in and out, which again I owe credit to
  //remarkablilty
  push();
  textSize(20);
  fill(255, fade);
  text(batman, width/2, 375);
  
  /*the fade effect works by adding an opacity level to the text color
  increasing the opacity level each frame, or decreasing however you 
  think about it and when it hits the cap opacity level
  which is 255 which means the image has no 
  opacity and it full in color, when it hits this level the level
  goes back to 0, which is full opacity and the text can't be seen
  at all, then repeats*/
  if(fade < 0){
       fadeAmount = 1;
     }else if(fade > 255){
       fadeAmount = -10
     }
  fade+=fadeAmount;
  pop();
}

//if the mouse is pressed in the canvas the image is saved as a pdf
//and have the option to print the pdf
function mousePressed(){
          pdf.save();
  
}

