var snow=new Array();
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var presents = false;
var count = 0;
var n = 1000;
 //public int r;
 //public int g;
 //public int b;
 //public int x = (int)(Math.random()*50)+375;
 //public int y = (int)(Math.random()*200)+50;
 //public int x;
 //public int y;
 
function setup() {
  var canvas = createCanvas (800, 400);
    canvas.parent('sketch-div')
  img = loadImage("grinchsled0.png");
  img2 = loadImage("unnamed0.png");
  img3 = loadImage("grinchhouse0.png");
  img4 = loadImage("unnamed01.png");
  img5 = loadImage("unnamed02.png");
  img6 = loadImage("unnamed03.png");
  for (var i=0; i<n; i++) {
    snow[i] = new SnowFlake();
  }
}
function draw() {
  background('#055EA1');
  fill('#E6E5DE');
  rect(0, height-40, width, 40);
  image(img6, 240, 260, 200, 200);
  image(img6, 340, 260, 200, 200);
  image(img6, 540, 210, 300, 300);
  imageMode(CENTER);
  image(img2, width/2, height/2, 200, 400);
  image(img3, width-100, height-130, 200, 250);
  image(img5, 100, height-183, 200, 300);
  //lights();
  textSize(18);
  fill('#D27177');
  text("Steal the presents from the house and bring them back to the cave", 10, height-10);
  textSize(24);
  fill('#F2E529');
  text("Presents stolen:" + count, width-250, 20);
  if(mouseIsPressed && dist(mouseX, mouseY, 750, 350)<100){
    if(presents==false){
      count++;
    }
    presents=true;
  }
  if(mouseIsPressed && dist(mouseX, mouseY, 150, 200)<30){
    presents=false;
  }
  if(presents==false){
    image(img, mouseX-50, mouseY-25, 150, 75);
  }
  if(presents==true){
    image(img4, mouseX, mouseY, 100, 100);
  }

  for (var i=0; i<n; i++){
    snow[i].move();
    snow[i].show();
  }
}
class SnowFlake {

//  private int x;
//  private int y;
//  private int xspeed;
//  private int yspeed;
//  private int size;
  //private int grow;
  constructor() {
    this.x=(Math.random()*(801));
    this.y=(Math.random()*(421))-200;
    this.xspeed=(Math.random()*(3))-2;
    this.yspeed=(Math.random()*(3))+2;
    this.size=(Math.random()*(5))+1;
    //grow=30;
  }

  show() {
    fill (255, 255, 255);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
      
  }

  move() {
    this.x+=this.xspeed;
    this.y+=this.yspeed;
      if (this.y>400) {
      this.y=-20;
      this.x=(Math.random()*width);
    }
  }
}
//public void lights(){

//  //for(int i = 0; i<10; i++){
//    r = (int)(Math.random()*70)+185;
//    g = (int)(Math.random()*70)+185;
//    b = (int)(Math.random()*70)+185;
//    x = (int)(Math.random()*50)+375;
//    y = (int)(Math.random()*200)+50;
//    fill(r, g, b);
//    ellipse(x, y, 12, 16);
//  //}
//}