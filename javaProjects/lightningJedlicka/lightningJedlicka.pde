int startTime;
int startX=60;
int startY=425;
int endX=60;
int endY=425;
int startX2=250;
int startY2=390;
int endX2=250;
int endY2=390;
int go = 1;
PImage img;
PImage img2;

void setup(){
  size(900, 900);
  img = loadImage("electro.png");
  img2 = loadImage("Spiderman.png");
  background(0);
  strokeWeight(2);
}
void draw(){
  background(0);
  img.resize(300, 300);
  image(img, 0, 300);
  
  //int r=(int)(Math.random()*256);
  int b=((int)(Math.random()*181)+75);
  int b2=(int)(Math.random()*256);
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
    
    int s=(int)(Math.random()*21)+295;
    tint(255, 255, b2);
    image(img2, 700, s);
    
    
    while(endX<width-90){
      endX=startX+(int)(Math.random()*10);
      endY=startY+((int)(Math.random()*15)-7);
      line(startX,startY, endX,endY);
      startX=endX;
      startY=endY;
  }
    while(endX2<width-70){
      endX2=startX2+(int)(Math.random()*10);
      endY2=startY2+((int)(Math.random()*15)-7);
      line(startX2,startY2, endX2,endY2);
      startX2=endX2;
      startY2=endY2;
  }
  }
  startX=60;
  startY=425;
  endX=60;
  endY=425;
  startX2=250;
  startY2=390;
  endX2=250;
  endY2=390;
int time = millis()-startTime;
if(time>1000){
  startTime=millis();
  reset();
  }
}
void reset(){
  go=go*-1;
}
