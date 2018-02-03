createCanvas(300, 300);

for (var i = 0; i <= 300; i = i + 5) {
  if (i <= height/2) { 
  	line(width/2 - i, i, width/2 + i, i);
  }
  else {
    line(i - width/2, i,  (3/2)* width - i, i);
  }
}
