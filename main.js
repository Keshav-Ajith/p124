
noseX = "";
noseY = "";
rightWristX = "";
leftWristX = "";
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(600, 130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    background("#e3e2ca");
    textSize(difference);
    fill("black");
    text("Keshav", noseX-50, noseY);
    document.getElementById("word_size").innerHTML = "Font size = " + difference + " px";
}

function modelLoaded()
{
    console.log("Pose Net is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX + " Nose y = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist x = " + leftWristX);
        console.log("Right Wrist x = " + rightWristX);
        console.log("Difference = " + difference);
    }

}