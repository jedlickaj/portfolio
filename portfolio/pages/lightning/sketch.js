'use strict';
//var startTime;
var time = 1000;
var startX = 60;
var startY = 425;
var endX = 60;
var endY = 425;
var startX2 = 250;
var startY2 = 390;
var endX2 = 250;
var endY2 = 390;
var go = 1;
var img;
var img2;

function preload() {
  img = loadImage("data/electro.png");
  img2 = loadImage("data/Spiderman.png");
}

function setup(){
  var canvas = createCanvas(900, 900);
    canvas.parent('sketch-div');
  background(0);
  strokeWeight(2);
  
}
function draw(){
  background(0);
  img.resize(300, 300);
  image(img, 0, 300);
  
  
  //int r=(int)(Math.random()*256);
  var b = random(75, 256);
  var b2 = random(0, 256);
  stroke(255, 255, b);
  if(go>0){
    img.resize(300, 300);
    tint(255, 255, 255);
    image(img2, 700, 300);
  }
  if(go<0){
    textSize(75);
    text("ZING", 400, 300);
    fill(255, 255, 255);
    
    textSize(18);
    text("oUcH", 740, 300);
    text("haha", 200, 300);
    fill(255, 255, 200);
    
    var s = random(295, 316);
    tint(255, 255, b2);
    image(img2, 700, s);
    
    
    while(endX<width-90){
      endX = startX + random(0, 11);
      endY = startY + random(-7, 8);
      line(startX,startY, endX,endY);
      startX = endX;
      startY = endY;
  }
    while(endX2<width-70){
      endX2 = startX2 + random(0, 11);
      endY2 = startY2 + random(-7, 8);
      line(startX2,startY2, endX2,endY2);
      startX2 = endX2;
      startY2 = endY2;
  }
  }
  startX = 60;
  startY = 425;
  endX = 60;
  endY = 425;
  startX2 = 250;
  startY2 = 390;
  endX2 = 250;
  endY2 = 390;

if(millis()>time){
  time = time + 1000;
  reset();
  }
}
function reset(){
  go=go*-1;
}