function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 25, 25, 590, 430);
    tint(tint_color);
    fill("cyan")
    rect(25, 45, 10, 400)
    rect(605, 45, 10, 400)
    rect(25, 25, 600, 10)
    rect(25, 445, 600, 10)
    fill("lime")
    circle(30, 30, 50)
    circle(610, 30, 50)
    circle(30, 450, 50)
    circle(610, 450, 50)

}

function take_snapshot() {
    save("filter.png")
}
