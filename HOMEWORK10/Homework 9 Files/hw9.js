//pupils
var leftPupilX=850;
var leftPupilY=300;
var rightPupilX=1000;
var rightPupilY=300;
var eyeColorG=220;

//triangles
var circleY=50;
var circleY2=30;

//rectangle
var rectX=800;
var rectY=400;

//text
var textSize1=40;

//head
var headW=400;
var headH=100;

//movement
var movementHeadH=2;
var movementHeadW=2;
var movementText=1;
var movementrectX=.5;
var movementrectY=.5;
var movementPupil=5;
var movementCircle=3;
var movementCircle2=3;


function setup(){
    createCanvas(1520,710);
    movementPupil= floor(random(1,6))
    movementCircle= floor(random(1,11))
    movementCircle2= floor(random(1,11))
    eyeColorG= floor(random(0,256))
}
function draw(){
    background(106,116,138);

//clouds
    strokeWeight(0);
    fill(97,100,102)
        circle(400,circleY,400)
    strokeWeight(0);
    fill(72,75,77)
        circle(1000,circleY,400)
    strokeWeight(0);
    fill(62,64,66)
        circle(1400,circleY,600)
    strokeWeight(0);
    fill(106,108,111)    
        circle(100,circleY2,300)
    strokeWeight(0);
    fill(85,88,90)
        circle(700,circleY2,300)

//waves
    fill(155,164,222);
    triangle(0,710,100,600,200,710)
        strokeWeight(0);
    fill(135,146,222);
    triangle(200,710,300,550,400,710);
        strokeWeight(0);
    fill(119,131,222);
    triangle(400,710,500,500,600,710);
        strokeWeight(0);
    fill(111,124,222);
    triangle(600,710,700,450,800,710);
        strokeWeight(0);
    fill(95,111,222);
    triangle(800,710,900,400,1000,710);
        strokeWeight(0);
    fill(84,100,222);
    triangle(1000,710,1100,350,1200,710);
        strokeWeight(0);
    fill(70,88,222);
    triangle(1200,710,1300,300,1400,710);
        strokeWeight(0);
    fill(56,77,222);
    triangle(1400,710,1500,250,1600,710);
        strokeWeight(0);

//me
    fill(199,177,105);
        ellipse(925,270,420,100);
        rect(715,265,420,100);
    strokeWeight(3);
    fill(102,0,102);
        rect(rectX,rectY,250,360);
    fill(192,173,150);
        rect(875,300,100,100);
        ellipse(925,300,headW,headH); //head
    fill(233,233,233);
        ellipse(850,300,100,25);
        ellipse(1000,300,100,25);
    fill(80,eyeColorG,94);
        circle(leftPupilX,leftPupilY,25);
        circle(rightPupilX,rightPupilY,25);
    strokeWeight(10);
        point(leftPupilX,leftPupilY);
        point(rightPupilX,rightPupilY);
    strokeWeight(3);
        line(770,320,1090,320);
    strokeWeight(5);
        line(800,400,700,600);
        line(1050,400,1150,600);

//text
    textSize(40);
    fill(0,0,0);
        text('by Brooklyn Plum',200,500);
    textSize(textSize1);
        text('"Self Portrait"',150,450);

//points of reference
    fill(0,255,0);
        circle(0,0,50);
    fill(0,0,255);
        circle(1520,0,50);
    fill(255,0,0);
        circle(1520,710,50);
    fill(230,255,0);
        circle(0,710,50);

//movement
if(leftPupilX<=800||leftPupilX>=900)
    {
        movementPupil*=-1;
    }
leftPupilX+=movementPupil;
rightPupilX+=movementPupil;

if(circleY<=0||circleY>=710)
    {
        movementCircle*=-1;
    }
circleY+=movementCircle;
if(circleY2<=0||circleY2>=710)
    {
        movementCircle2*=-1;
    }
circleY2+=movementCircle2;

if(rectX<=780||rectX>=820)
    {
        movementrectX*=-1;
    }
rectX+=movementrectX;
if(rectY<=380||rectY>=420)
    {
        movementrectY*=-1;
    }
rectY+=movementrectY;

if(textSize1<=8||textSize1>=200)
    {
        movementText*=-1;
    }
textSize1+=movementText;

if(headH<=350||headH>=450)
    {
        movementHeadH*=-1;
    }
headH+=movementHeadH;
if(headW<=50||headW>=150)
    {
        movementHeadW*=-1;
    }
headW+=movementHeadW;
    
}