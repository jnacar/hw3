function jefPatch(x, y) {
  fill(0,200,255);
  stroke(238);
  rect(x, y, 300, 300);
  colorMode(RGB);
  var xmove = 30;
  var ymove = 30;
  var incr = 40;
  var count = 0;
  while(count < 21) {
    fill(random(255), random(255), random(255));
   	triangle(x + 150,y + 100, x + 75, y + 200, x + 225, y + 200);
  
    fill(random(255), random(255), random(255));
    if (xmove < 270 && ymove == 30) {
      ellipse(x + xmove, y + ymove,30,30);
      xmove = xmove + incr;
    }
    if (xmove == 270 && ymove < 270) {
      ellipse(x + xmove, y + ymove,30,30);
      ymove = ymove + incr;
    }
    if (xmove <= 270 && ymove == 270) {
      ellipse(x + xmove, y + ymove,30,30);
      xmove = xmove - incr;
    }
    if (xmove == 30 && ymove <= 270) {
       ellipse(x + xmove, y + ymove,30,30);
      ymove = ymove - incr;
    }
    count = count + 1;
  }
}
