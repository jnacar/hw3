createCanvas(300, 300);

for (var i = 0; i <= 300; i = i + 5) {
  if (i <= width/2) { 
  	line(i, 0, i, 2*i);
  }
  else {
    line(i, 0,  i, height);
  }
}
