
createCanvas(300, 300);

function draw() {
	for (var i = 0; i < 300; i = i + 10) {
  	line(mouseX, mouseY, i, height);
	}
}
