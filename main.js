function preload() {
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(70, 200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw() {
    image(video, 100, 80, 300, 250);
    tint(tint_color);
    stroke(135, 46, 88);
    fill(59, 25, 41);

    circle(40,40,50);
 circle(460,40,50);
 circle(40,360,50);
 circle(460, 360, 50);

 stroke(250, 245, 245);
    fill(33, 59, 25);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(450, 63, 25, 275);
    rect(30, 63, 25, 275);
}

function take_snapshot() {
    save("vidhi.png");
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}