var particle = new Array();
//int r = (int)(Math.random()*70)+180;
//int g = (int)(Math.random()*70)+180;
//int b = (int)(Math.random()*70)+180;

function setup() {
    var canvas = createCanvas(800, 800, P2D);
      canvas.parent('sketch-div');
//    createCanvas(800, 800, P2D);
    particle = new Array();
    for (var i = 0; i < 1000; i++) {
        particle[i] = new OddParticle(400, 400);
    }
    for (var i = 1000; i < 1050; i++) {
        particle[i] = new JumboParticle(400, 400);
    }
    for (var i = 1050; i < 2050; i++) {
        particle[i] = new NormalParticle(400, 400);
    }
}

function draw() {
    background(0);
    for (var i = 0; i < particle.length; i++) {
        particle[i].show();
        particle[i].move();
    }
}
//interface Particle{
//  public void show();
//  public void move();
//}
class NormalParticle {
    //  var xpos;
    //  var ypos;
    //  var angle;
    //  var speed;

    //  var s;
    //  var r;
    //  var g;
    //  var b;
    //  NormalParticle(){
    //  }
    constructor(x, y) {
        this.xpos = x;
        this.ypos = y;
        this.r = (Math.random() * 70) + 180;
        this.g = (Math.random() * 70) + 180;
        this.b = (Math.random() * 70) + 180;
        this.s = 10;
        this.angle = (Math.PI * 2) * Math.random();
        this.speed = Math.random() * 10;
    }
    show() {
        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(this.xpos, this.ypos, this.s, this.s);
    }
    move() {
        this.xpos += (Math.cos(4 * this.angle) * this.speed) * Math.cos(this.angle);
        this.ypos += (Math.sin(4 * this.angle) * this.speed) * Math.sin(this.angle);
        this.angle += .01;
    }

}
class OddParticle {
    //  var xpos;
    //  var ypos;
    //  var angle;
    //  var speed;
    //  var s;
    //  OddParticle(){
    //  }
    constructor(x, y) {

        this.xpos = x;
        this.ypos = y;
        this.s = 10;
        this.angle = (Math.PI * 2) * Math.random();
        this.speed = Math.random() * 5;
    }
    show() {
        fill(255, 255, 255, 100);
        noStroke();
        ellipse(this.xpos, this.ypos, this.s, this.s);

    }
    move() {
        this.xpos += ((Math.cos(this.angle) * 3) * this.speed);
        this.ypos += ((Math.sin(this.angle) * 3) * this.speed);
        this.angle += .01;
    }
}
class JumboParticle extends OddParticle {
    //  var xpos;
    //  var ypos;
    //  var angle;
    //  var speed;
    //  var s;
    //  JumboParticle(){
    //  }
    constructor(x, y) {
        super();
        super.move();
        this.xpos = x;
        this.ypos = y;
        this.s = 10;
        this.angle = (Math.PI * 2) * Math.random();
        this.speed = Math.random() * 5;
    }
    show() {
        fill(255, 255, 255, 75);
        noStroke();
        ellipse(this.xpos, this.ypos, 3 * this.s, 3 * this.s);

    }
    //  void move(){
    //    this.xpos+=((Math.cos(this.angle)*3)*this.speed);
    //    this.ypos+=((Math.sin(this.angle)*3)*this.speed);
    //    angle+=.01;
    //  }
}
