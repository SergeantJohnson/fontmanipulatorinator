noseX=0;
noseY=0;
leftwristX=0;
difference=0;
rightwristX=0;


function preload() {

} 

function setup() {
video=createCapture(VIDEO); 
video.size(300,300);
canvas= createCanvas(550,300);
canvas.position(560,150);

}

function draw() {
    background('#8c0ddb')
}