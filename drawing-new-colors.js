function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'Y') {
    fill(255, 255, 0);
  } 
  else if (key == 'C') {
    fill(0, 255, 255);
  } 
  else if (key == 'P') {
    fill(255, 0, 255); 
  }
  else if (key == 'T') {
    fill(170, 190, 188); 
  }
  else if (key == 'G') {
    fill(45, 198, 10); 
  }
  else if (key == 'R') {
    fill(random(255), random(255), random(255)); 
  }
}
