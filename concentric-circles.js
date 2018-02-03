createCanvas(300, 300);

for (var i = 0; i < 300; i = i + 10) {
  noFill();
  if (i <= 10) {
    noStroke();
    ellipse(150, 150, i ,i);
  }
  else {
    stroke(0, 0, 0);
  	ellipse(150, 150, i, i);
  }
}

