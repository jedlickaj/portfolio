var b = new Array();
var c = 0;
var end = false;
var win = false;
var score = 0;
var n = 30;

function setup() {
    var canvas = createCanvas(800, 800);
      canvas.parent('sketch-div');
    b = new Array();
    for (var i = 0; i < n; i++) {
        var xc1 = random(350, 450);
        var yc1 = random(350, 450);
        var xc2 = random(350, 450);
        var yc2 = random(350, 450);
        if (i % 2 == 0) {
            c = 0;
        } else {
            c = 1;
        }
        b[i] = new Bacteria(xc1, yc1, xc2, yc2, c);
    }
}

function draw() {
    if (!end) {
        background(0);
        for (var i = 0; i < b.length; i++) {
            //b[i].gameover();
            b[i].show();
            //b[i].attack();
            b[i].move();
            
        }
    }
        fill(255);
        textSize(32);
        text("Score:" + score, 350, 50);
        if (score >= n / 2) {
            win = true;
           
        }
        if (end) {
            background(0);
            textSize(32);
            text("You_arebad", 350, 350);
            text("Score:" + score, 350, 400);
        }
        if (win) {
            background(0);
            textSize(32);
            text("You_win", 350, 350);
            text("Score:" + score, 350, 400);
        }


    

}
class Bacteria {

    //  private int x1;
    //  private int y1;
    //  private int x2;
    //  private int y2;
    //  private int c;
    //  private int x1speed;
    //  private int y1speed;
    //  private int x2speed;
    //  private int y2speed;
    //  private int r;
    //  private color o1;
    //  private color f1;
    //  private boolean green = false;
    //  private boolean orange = false;
    //  private boolean scored = false;
    //int a;
    //int b;
    //int d;
    //int e;

    constructor(x1, y1, x2, y2, c) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.c = c;
        this.r = 50;
        this.o1;
        this.f1;
        this.green = false;
        this.orange = false;
        this.scored = false;

        this.dir = Math.floor((Math.random() * 4) + 1);
         console.log(this.dir)
        if (this.dir == 1) {
            this.x1speed = (Math.random() * 3) - 4;
            this.y1speed = (Math.random() * 3) - 4;
            this.x2speed = (Math.random() * 3) - 4;
            this.y2speed = (Math.random() * 3) - 4;
        }
        if (this.dir == 2) {
            this.x1speed = (Math.random() * 3) + 1;
            this.y1speed = (Math.random() * 3) - 4;
            this.x2speed = (Math.random() * 3) + 1;
            this.y2speed = (Math.random() * 3) - 4;
        }
        if (this.dir == 3) {
            this.x1speed = (Math.random() * 3) + 1;
            this.y1speed = (Math.random() * 3) + 1;
            this.x2speed = (Math.random() * 3) + 1;
            this.y2speed = (Math.random() * 3) + 1;
        }
        if (this.dir == 4) {
            this.x1speed = (Math.random() * 3) - 4;
            this.y1speed = (Math.random() * 3) + 1;
            this.x2speed = (Math.random() * 3) - 4;
            this.y2speed = (Math.random() * 3) + 1;
        }

        //    r=50;

    }
    show() {
        if (this.green == true) {
            this.o1 = '#8DFFA6';
            this.f1 = '#27A603';

        }
        if (this.green == false) {
            this.o1 = '#0066CC';
            this.f1 = '#3399FF';
        }
        if (this.c == 0) {
            stroke(this.o1);
            fill(this.f1);
            ellipseMode(CENTER);
            ellipse(this.x1, this.y1, this.r, this.r);
        } else {
            this.orange = true;
            stroke('#CC6600');
            fill('#FFB266');
            ellipseMode(CENTER);
            ellipse(this.x2, this.y2, this.r, this.r);
        }
        if (mouseIsPressed) {
            if (dist(mouseX, mouseY, this.x1, this.y1) < this.r && !this.scored && !this.orange) {
                this.scored = true;
                this.green = true;
                score += 1;
                console.log(score);
            }


        }

    }
    move() {

        //x1+=xspeed;
        //y1+=yspeed;
        //x2+=xspeed;
        //y2+=yspeed;

        if (this.x1 + (this.r / 2) >= width) {
            this.x1speed *= -1;
        }
        if (this.x2 + (this.r / 2) >= width) {
            this.x2speed *= -1;
        }
        if (this.y1 + (this.r / 2) >= height) {
            this.y1speed *= -1;
        }
        if (this.y2 + (this.r / 2) >= height) {
            this.y2speed *= -1;
        }
        if (this.x1 - (this.r / 2) <= 0) {
            this.x1speed *= -1;
        }
        if (this.x2 - (this.r / 2) <= 0) {
            this.x2speed *= -1;
        }
        if (this.y1 - (this.r / 2) <= 0) {
            this.y1speed *= -1;
        }
        if (this.y2 - (this.r / 2) <= 0) {
            this.y2speed *= -1;
        }
        this.x1 += this.x1speed;
        this.y1 += this.y1speed;
        this.x2 += this.x2speed;
        this.y2 += this.y2speed;
        if (mouseIsPressed) {
            if (dist(mouseX, mouseY, this.x2, this.y2) < this.r && this.orange) {
                end = true;
                //textSize(32);
                //text("Game-Over", 350, 350);
                //x1speed=0;
                //y1speed=0;
                //x2speed=0;
                //y2speed=0;
            }
        }

        //if(mouseX<x1){
        //  x1+=(int)(Math.random()*-3);
        //}
        //if(mouseX>x1){
        //  x1+=(int)(Math.random()*3);
        //}
        //if(mouseY<y1){
        //  y1+=(int)(Math.random()*-3);
        //}
        //if(mouseY>y1){
        //  y1+=(int)(Math.random()*3);
        //}
        //if(mouseX<x2){
        //  x2+=(int)(Math.random()*-3);
        //}
        //if(mouseX>x2){
        //  x2+=(int)(Math.random()*3);
        //}
        //if(mouseY<y2){
        //  y2+=(int)(Math.random()*-3);
        //}
        //if(mouseY>y2){
        //  y2+=(int)(Math.random()*3);
        //}
    }
    //void gameover(){
    //  if(mousePressed){
    //    if(dist(mouseX, mouseY, x2, y2)<r){
    //      textSize(32);
    //      text("Game-Over", 350, 350);
    //      x1speed=0;
    //      y1speed=0;
    //      x2speed=0;
    //      y2speed=0;
    //    }
    //  }
    //}
}
