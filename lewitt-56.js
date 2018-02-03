
createCanvas(300, 300);

for (var i = 0; i <= 300; i = i + 10) {
  line(i, 0, i, height);
}

for (var i = 150; i <= 300; i = i + 10) {
  line(0, i, width, i);
}

for (var i = 0; i <= 150; i = i + 10) {
  line(width/2, i, width, i);
}

for (var i = 0; i <= 450; i = i + 10) {
  if (i <= 150) {
    line(i, 150, 0, 150 + i);
  }
  if (i <= 300) {
    line(i, 150, i - 150, 300);
  }
  else {
    line(300, i - 150, i - 150, 300);
  }
}

for (var i = 0; i <= 300; i = i + 10) {
  if (i <= 150) {
    line(150, 300 - i, i + 150, 300)
  }
  else {
    line(i, 150, 300, 450 - i);
  }
}
