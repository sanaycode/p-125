leftWristX="";
rightWristX="";
noseX="";
noseY="";
difference="";
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,350);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+" , noseY = "+noseY);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("righWristX = "+rightWristX+" , leftWristX = "+leftWristX+" , defference = "+difference);
    }
}
function draw(){
    background("#9e9e9d");
    textSize(difference);
    fill("#60fafc");
    text("Sanay", 20, 100);
}