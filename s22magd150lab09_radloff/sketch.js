//I owe credit for the dog video to Magda Ehlers
//I owe credit for the music to Bensound.com
let button;
let mirror;
let music;
let amplitude;
let playing = false;

/*the function preload preloads both the video and sound so that the project can run without any errors on the processing side of things*/
function preload(){
  mirror = createVideo('dogVideo_Trim3.mp4');
  music = loadSound('bensound-littleidea.mp3');
  mirror.size(400, 400);
}

/*The setup function creates the button and amplutide. It also hides the video so it doesn't appear on the outside of the canvas*/
function setup() {
  createCanvas(400, 250);
  button = createButton('play');
  button.mousePressed(toggleVideo);
  amplitude = new p5.Amplitude();
  mirror.hide();
}

/*the draw function adds the video to the canvas and resizes the video so the whole video appears.*/
function draw(){
  mirror.size(400, 400);
  image(mirror, 0, 0);
}

/*The toggle video function plays the video and music when the play button is pressed or stops the video and music when the pause button is pressed*/
function toggleVideo() {
  
/*this part of the if statement pauses the video and music if it is playing using a boolean called playing*/
    if (playing) {
    mirror.pause();
      music.pause();
    button.html('play');
  } else {
/*this part of the if statement plays and loops the video and music unitl the pause button is pressed. Also the music is being amplified by the the built in p5 amplitude method*/
    mirror.loop();
    music.loop();
    amplitude = new p5.Amplitude();
    amplitude.setInput(music);
    button.html('pause');
  }
  playing = !playing;
}