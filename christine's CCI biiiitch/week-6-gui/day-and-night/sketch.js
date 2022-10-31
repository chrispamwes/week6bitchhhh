/*colour palette RGB codes
in dali inspo
blue: (38,152,191)
yellow green: (217,211,132)
brown: (68,29,13)
orange: (217,125,43) */

let angle = 0;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();

  buttonDay = createButton("day");
  buttonDay.position(300,300);
  buttonDay.mousePressed(theDay);
  //this calls the function 'theDay'
  //written below

  //this is the night
  buttonNight = createButton("night");
  buttonNight.position(100,300);
  buttonNight.mousePressed(theNight);

  //first 2 values are the range
  slider = createSlider(180,360,180);
  slider.position(100,350);
  slider.style('width','200px');
}

function draw() {

  let x = map(angle,0, width,0, 255);


  background(x,x,x);

  //drawing from centre of canvas
  //creating rotating sun
  push();
    translate(width/2, height/2);
    rotate(angle);
  //filling ellipse (sun)
     fill(217,211,132);
     ellipse(0,-100,50,50);

     //moon
     fill(255);
     ellipse(0,100,50,50);
  pop();
  fill(38,x,130);
  rect(0,200,400,250);
  angle += 10;

//slider value correlates to angle
  angle = slider.value();

}

function theDay(){
  angle = 360;
  slider.value(360);
}

function theNight(){
  angle = 180;
  slider.value(180);
}