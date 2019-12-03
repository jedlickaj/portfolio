var n = 55;
var total = 0;
var r;
var g;
var b;
var img;
var img2;
var dice = new Array();
//Fruity [] fruit = new Fruity[1000];

function preload(){
    img = loadImage("data/flintstone.png");
    img2 = loadImage("data/fredflintstone.png");
    
}

function setup()
{
  var canvas = createCanvas(750, 450);
    canvas.parent('sketch-div');
  //var n = 55;
  var r = random(255);
  var g = random(255);
  var b = random(255);
  //dice = new Die [16];
  for(var i = 0; i<4; i++){
    for(var k = 0; k<4; k++){
      dice [i*4+k] = new Die(k*110+10, i*110+10);
    }
  }
  //fruit = new Fruity [100];
  //for(int j = 0; j<fruit.length; j++){
    //fruit[j] = new Fruity();
  //}
  noLoop();
}
function draw()
{
  
  background(0);
  for(var i = 0; i<dice.length; i++){
    dice[i].roll();
  }
  
  fill(50);
  stroke(0);
  rect(450, 0, width-450, height);
  
  //for(int i=0; i<fruit.length; i++){
  //    fruit[i].show();
  //    fruit[i].fall();
  //    println("fall");
 //}
  textSize(32);
  fill(255);
  text("Lucky Number:"+n, 460, 50);
  textSize(18);
  fill(255);
  text("Part of a balanced breakfast", 470,435);
  
  if(total==n){
    textSize(64);
    fill('#04C4D9');
    text(" "+total, 530, 170);
    textSize(30);
    fill('#EE9B00');
    text("YaBaDaBaDooo!", 500, 220);
    img2.resize(200, 170);
    image(img2, 550, 250);
    //for(int i=0; i<fruit.length; i++){
      //fruit[i].show();
      //fruit[i].fall();
    //}
  }else{
    textSize(32);
    fill(180);
    text(" "+total, 545, 170);
    img.resize(100, 150);
    image(img, 590, 250);
  }
}
function mousePressed()
{
  total=0;
  for(var i = 0; i<4; i++){
    for(var k = 0; k<4; k++){
      dice [i*4+k] = new Die(k*110+10, i*110+10);
    }
  }
  redraw();
}
class Die //models one single dice cube
{
  //variable declarations here
  //var x;
  //var y;
  //var rand;
  //private int rand;
  
  constructor(x,y) //constructor
  {
    //variable initializations here
    this.x = x;
    this.y = y;
    this.rand = Math.floor(random(1,7));
    
  }
  roll()
  {
    fill(255);
    rect(this.x, this.y, 100, 100, 15);
    var r = random(255);
    var g = random(255);
    var b = random(255);
    
    if(mouseIsPressed){
      //console.log(this.rand);
      if(this.rand==1){
        fill(r, g, b);
        stroke(255);
        ellipse(this.x+50, this.y+50, 20, 20);
        total+=1;
      }
      if(this.rand==2){
        fill(r, g, b);
        stroke(255);
        ellipse(this.x+25, this.y+25, 20, 20);
        ellipse(this.x+75, this.y+75, 20, 20);
        total+=2;
      }
      if(this.rand==3){
        fill(r, g, b);
        stroke(255);
        ellipse(this.x+25, this.y+25, 20, 20);
        ellipse(this.x+50, this.y+50, 20, 20);
        ellipse(this.x+75, this.y+75, 20, 20);
        total+=3;
      }
      if(this.rand==4){
        fill(r, g, b);
        stroke(255);
        ellipse(this.x+25, this.y+25, 20, 20);
        ellipse(this.x+75, this.y+25, 20, 20);
        ellipse(this.x+25, this.y+75, 20, 20);
        ellipse(this.x+75, this.y+75, 20, 20);
        total+=4;
      }
      if(this.rand==5){
        fill(r, g, b);
        stroke(255);
        ellipse(this.x+25, this.y+25, 20, 20);
        ellipse(this.x+75, this.y+25, 20, 20);
        ellipse(this.x+50, this.y+50, 20, 20);
        ellipse(this.x+25, this.y+75, 20, 20);
        ellipse(this.x+75, this.y+75, 20, 20);
        total+=5;
      }
      if(this.rand==6){
        fill(r, g, b);
        stroke(255);
        ellipse(this.x+25, this.y+25, 20, 20);
        ellipse(this.x+75, this.y+25, 20, 20);
        ellipse(this.x+25, this.y+50, 20, 20);
        ellipse(this.x+75, this.y+50, 20, 20);
        ellipse(this.x+25, this.y+75, 20, 20);
        ellipse(this.x+75, this.y+75, 20, 20);
        total+=6;
      }
    }
  }
    

}
//class Fruity{
//  private int x;
//  private int y;
//  private int xspeed;
//  private int yspeed;
//  private int size;
  
//  Fruity(){
//    x=(int)(Math.random()*300)+450;
//    y=(int)(Math.random()*10)-20;
//    xspeed=(int)(Math.random()*7)-3;
//    yspeed=(int)(Math.random()*3)+2;
//    size=(int)(Math.random()*5)+3;
//  }
//  void show(){
//    int a = (int)(Math.random()*255);
//    int b = (int)(Math.random()*255);
//    int c = (int)(Math.random()*255);
//    fill(a, b, c);
//    noStroke();
//    ellipse(x, y, size, size);
//  }
//  void fall(){
//    x+=xspeed;
//    y+=yspeed;
//    if(y>450){
//      y=0;
//      x=(int)(Math.random()*300)+450;
//    }
//  }
//}