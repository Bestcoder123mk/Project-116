noseX=0;
noseY=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup(){
   canvas=createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,39,39);
}
function take_snapshot(){
    save("MyFilterPhoto.png");
}
function modelLoaded(){
    console.log("Posenet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+1;
        console.log("Nose X =",noseX);
        console.log("Nose Y =",noseY);       
    }
}