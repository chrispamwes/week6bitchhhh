let r, g, b, x, y, myButton;

function setup(){
  createCanvas(400,300);
  r = 242;
  g = 241;
  b = 170;
  myButton = createButton("hiiiiiiiiiii");
  myButton.position(150,150);
  myButton.mousePressed(BUTTslap);
  myButton.style('background', 'rgb(237,187,234');

}

function draw(){
  background(r,g,b);
    //mouseclick
    push();
    noStroke();
    fill(255,200,0);
    if (mouseIsPressed === true){
      ellipse(50,50,50,50);
    } else {
      rect(25,25,50,50);
    }
    pop();

    //keypress
    push();
    if (keyIsPressed === true && keyCode==87){
    noStroke();
    fill(200,100,150); //when you press 'W'  
    } else{
      fill(0,0,150);
    }
    textSize(20);
    text("key: " + keyCode, 100,100);
    rect(100,25,50,50);
    pop();
}

function BUTTslap(){
  r = random(150,240);
  g = random(150, 240);
  b = random(175,255);
}

