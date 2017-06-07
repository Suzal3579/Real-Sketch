function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    fill(random(1, 255), random(1, 255), random(1, 255));
    ellipse(mouseX, mouseY, 50, 50);
}