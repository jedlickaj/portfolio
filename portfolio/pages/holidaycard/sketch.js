var r = 0;
var check = false;
var snow = new Array();

function preload(){
    //message();
    myFont = loadFont('McLaren-Regular.ttf');
}

function setup() {
//  createCanvas (800, 400, WEBGL);
  var canvas = createCanvas (800, 400);
    canvas.parent('sketch-div')
  for (var i=0; i<1000; i++) {
    snow[i] = new SnowFlake();
  }
    textSize(30);
    textFont(myFont);
  fill(2, 6, 44);
  text("Happy Holidays!!", 270, 50); 
}
function draw() {
  background(2, 6, 44);
  mousePressed();
  moon();
  mountains();
  mousePressed2();
  //message();
  tree();
  lights2();
  //stroke(5,255,255,255);
  for (var i=0; i<snow.length; i++){
    snow[i].move();
    snow[i].show();
  }
  igloo();
  ground();
}
function ground() {
  noStroke();
  fill(255, 255, 255);
  rect(0, 340, 800, 375);
}
function igloo() {
  stroke(166,224,245,255);
  fill(232, 249, 255);
  ellipse(675, 300, 300, 300);
  rect(490, 285, 100, 55);
  
  fill(166, 224, 245);
  rect(498, 295, 45, 50);
}
function message(){
  textSize(30);
  fill(2, 6, 44);
  text("Happy Holidays!!", 270, 50); 
}
function mountains(){
  fill(5, 14, 93);
  triangle(0, 375, 300, 100, 600, 375);
  triangle(345, 375, 655, 75, 1000, 375);
  fill(9, 21, 126);
  triangle(245, 150, 300, 100, 355, 150);
  triangle(605, 125, 655, 75, 710, 125);
}
function moon(){
  if(r==255){
    check=true;
  }
  
  if(r<=100){
   check=false; 
  }
  
  if(check==false){
   r++; 
  }else{
   r--;
  }
 
  fill(255, 255, r);
  ellipse(700, 75, 75, 75);
   
}
function mousePressed(){
  if(mouseIsPressed){
    background(178, 247, 255);
  }
}
function mousePressed2(){
  if(mouseIsPressed){
    fill(67, 184, 255);
    triangle(0, 375, 300, 100, 600, 375);
    triangle(345, 375, 655, 75, 1000, 375);
    fill(255, 255, 255);
    triangle(245, 150, 300, 100, 355, 150);
    triangle(605, 125, 655, 75, 710, 125);
  }
}
function tree(){
  fill(183, 122, 72);
  rect(125, 295, 25, 45);
  fill(80, 222, 81);
  triangle(65, 315, 135, 215, 205, 315);
  fill(100, 222, 81);
  triangle(73, 270, 135, 185, 196, 270);
  fill(120, 222, 81);
  triangle(83, 225, 135, 135, 188, 225);
}
function lights2(){
  var count = 68;
  var count2 = 74;
  var count3 = 82;
  var a = (Math.random()*255);
  var b = (Math.random()*255);
  var c = (Math.random()*255);
  var dots = new Array();
  for(var i=0; i<dots.length; i++){
    count+=15;
    dots[i]=count;
  fill(a, b, c);
  ellipse(dots[i], 300, 10, 10);
  }
  var dots2 = new Array();
  for(var i=0; i<dots2.length; i++){
    count2+=15;
    dots2[i]=count2;
  fill(a, b, c);
  ellipse(dots2[i], 255, 10, 10);
  }
  var dots3 = new Array();
  for(var i=0; i<dots3.length; i++){
    count3+=15;
    dots3[i]=count3;
  fill(a, b, c);
  ellipse(dots3[i], 205, 10, 10);
  }
}
class SnowFlake {


  //private int grow;
  constructor() {
    this.x = Math.floor(random(0, 800));
    this.y = Math.floor(random(-200, 220));
    this.xspeed = Math.floor(random(-2,1));
    this.yspeed = Math.floor(random(2,4));
    this.size = Math.floor(random(1, 5));
    //grow=30;
  }

  show() {
    fill (255, 255, 255);
    ellipse(this.x, this.y, this.size, this.size);
      
  }

  move() {
    this.x+=this.xspeed;
    this.y+=this.yspeed;
      if (this.y>400) {
      this.y=-20;
      this.x=Math.floor((Math.random()*width));
    }
  }
}