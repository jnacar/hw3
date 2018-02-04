createCanvas(301, 101);

line(0, 0, 0, 300);
line(70, 0, 70, 300);
line(100, 0, 100, 300);
line(200, 0, 200, 300);
line(230, 0, 230, 300);
line(300, 0, 300, 300);

for (var i = 0; i <= 100; i = i + 2) {
  line(0, i, 70, i);
}

for (var i = 0; i <= 200; i = i + 2) {
  if (i <= 100) {
    line(i + 100, 0, 100, i);
  }
  else {
    line(200, i - 100, i, 100);
  }
}

for (var i = 0; i <= 70; i = i + 2) {
  line(300 - i, 0, 300, i);
}  

for (var i = 0; i <= 30; i = i + 2) {
  line(230, i, 300, i + 70);
}

for (var i = 0; i <= 70; i = i + 2) {
  line(230, 30 + i, 300 - i, 100);
}
