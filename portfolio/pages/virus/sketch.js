var v = new Array();
var end = false;
var x;
var y;
var n = 100;


function setup(){
  var canvas = createCanvas(800, 800);
      canvas.parent('sketch-div');
  v = new Array();
    for(var i = 0; i<n; i++){
      x = (Math.random()*400)+200;
      y = (Math.random()*10)+780;
      v[i] = new Virus(x, y);
    }
}

function draw(){
  if(!end){
    background(0);
    if(mouseIsPressed){
      var r = (Math.random()*255);
      var g = (Math.random()*255);
      var b = (Math.random()*255);
      fill(r, g, b);
      ellipse(mouseX, mouseY, 30, 30);
      for(var i = 0; i<n; i++){
        v[i].show();
        v[i].move();
      }
    }else{
      fill(255);
      ellipse(mouseX, mouseY, 30, 30);
      for(var i = 0; i<n; i++){
        v[i].show();
        v[i].move();
        v[i].die();
      }
    }
  }
  if(end){
    background(0);
    fill(255);
    ellipseMode(CENTER);
    ellipse(50, 50, 30, 30);
    textSize(32);
    fill(255);
    text("Game Over", 10, 30);
    text("restart", 70, 60);
    if(mouseIsPressed && dist(mouseX, mouseY, 50, 50)<15){
      for(var i = 0; i<n; i++){
        v[i].reset();
      }
      end = false;
    }
  }
}

class Virus{
//  private int x;
//  private int y;
//  private int xspeed;
//  private int yspeed;
//  private int r;
  
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.xspeed = (Math.random()*8)-4;
    this.yspeed = (Math.random()*8)-4;
    this.r = (Math.random()*200)+55;
  }
  show(){
    fill(this.r, 0, 0);
    ellipse(this.x, this.y, 30, 30);
  }
  move(){
    this.x += this.xspeed;
    this.y += this.yspeed;
  
  if(this.x >= width || this.x <= 0){
     this.xspeed*=-1;
  }
  if(this.y >= height || this.y <= 0){
    this.yspeed*=-1;
  }
  
  }
  die(){
    if(dist(mouseX, mouseY, this.x, this.y)<15){
      end = true;
    }
  
  }
  reset(){
    this.y = (Math.random()*10)+780;
  }
}