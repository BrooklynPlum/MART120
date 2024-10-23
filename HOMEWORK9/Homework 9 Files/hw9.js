function setup(){
    createCanvas(1520,710);
}
function draw(){
    background(106,116,138);

//clouds
    strokeWeight(0);
    fill(97,100,102)
        circle(400,50,400)
    strokeWeight(0);
    fill(72,75,77)
        circle(1000,50,400)
    strokeWeight(0);
    fill(62,64,66)
        circle(1400,50,600)
    strokeWeight(0);
    fill(106,108,111)    
        circle(100,30,300)
    strokeWeight(0);
    fill(85,88,90)
        circle(700,30,300)

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
        rect(800,400,250,360);
    fill(192,173,150);
        rect(875,300,100,100);
        ellipse(925,300,400,100);
    fill(233,233,233);
        ellipse(850,300,100,25);
        ellipse(1000,300,100,25);
    fill(80,220,94);
        circle(850,300,25);
        circle(1000,300,25);
    strokeWeight(10);
        point(850,300);
        point(1000,300);
    strokeWeight(3);
        line(770,320,1090,320);
    strokeWeight(5);
        line(800,400,700,600);
        line(1050,400,1150,600);

//text
    textSize(40);
    fill(0,0,0);
        text('by Brooklyn Plum',200,500);
    textSize(60);
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
    
}