clownnose=''

function preload(){
    clownnose= loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    c1=createCanvas(600,450);
    c1.center()
    w1=createCapture(VIDEO);
    w1.hide();
    pn=ml5.poseNet(w1,modelLoaded);
    pn.on('pose',gotPoses);
}
function modelLoaded(){
    console.log ('model has loaded')
}
nosex='';
nosey='';
function gotPoses(results){
if(results.length>0){
    console.log(results)
    nosex=results[0].pose.nose.x-60;
    nosey=results[0].pose.nose.y-20;
    console.log('x position of my nose is',nosex)
    console.log('y position of my nose is',nosey)
}
}
function draw(){
    image (w1, 0, 0, 600,450);
    image(clownnose, nosex,nosey,80,70);
}
function takepic(){
    save ('crazyclown.png')
}
