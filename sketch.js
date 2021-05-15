function fmod(a,b) { return Number((a - (Math.floor(a / b) * b)).toPrecision(8)); };


function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 100);
}

function draw() {
    background(220);
    const phase = millis() / 1000 * 2 * PI * 0.5;
    const h = sin (phase) * 200;
    const w = cos (phase) * 250;
    const colorHue = fmod(millis() / 1000 * 100 * 0.3, 100);
    fill(colorHue, 100, 100);
    ellipse(200, 200, w, h);
}