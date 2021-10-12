song1="";
song2="";

status="";

scorerightwrist=0;

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length>02){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+" leftWristY = "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        righttWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+" rightWristY = "+rightWristY);

        scoreleftwrist=results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist = "+ scoreleftwrist);

        scorerightwrist=results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist = "+ scoreleftwrist);
    }
}

function draw(){
    image(video, 0, 0, 400, 300);
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreleftwrist>0.2)
    {
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume = "+volume;
    song.setVolume(volume);

    song_song1.isPlaying();
    song_song2.isPlaying();

    song_song1.stop();
    song_song2.stop();    
    

    if(song2=false){
        song_song2.isPlaying();
        document.getElementById("answer")=innerHTML="status";
    }
 }

}

function play(){
    song1.play();
}