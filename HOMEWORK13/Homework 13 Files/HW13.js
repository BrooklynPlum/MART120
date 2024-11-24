function setup ()
{
    createCanvas (1400,700);

    var x=700;
    var y=25;
    var diameter=35;

    var x1=750;
    var y1=75;
    var diameter1=55;

    for(var i = 0; i < 7; i++)
        {
            X[i] = x;
            Y[i] = y;
            D[i] = diameter;
            x += 100;
            y += 100;
            diameter += 0;
        }

    for(var i = 0; i < 7; i++)
        {
            X1[i] = x1;
            Y1[i] = y1;
            D1[i] = diameter1;
            x1 += 100;
            y1 += 100;
            diameter1 += 0;
        }    
}

var X = [];
var Y = [];
var D = [];

var X1 = [];
var Y1 = [];
var D1 = [];

var XMove = [];
var X1Move = [];

var playerX=1200;
var playerY=600;

var randomCircleX=mouseX;
var randomCircleY=mouseY;

function draw ()
{
    background (50);

    drawExit();

    drawPlayer();
    textSize(17);
    text('<<< This Is You',1250,620);

    if (playerY >=50 && playerY <=200 && playerX <= 10)
    {
        textSize(100);
        fill(250,0,0);
        text('GOOD JOB! YOU WON!',150,350);
    }

    fill (70,92,32);
    for(var i = 0; i < X.length; i++)
        {
            circle(X[i],Y[i],D[i]);
            XMove[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);

            X[i]+=XMove[i];
            if (X[i] >= 1400)
            {
                X[i]=0;
            }
        }

    fill (120,3,75);
    for(var i = 0; i < X1.length; i++)
        {
            circle(X1[i],Y1[i],D1[i]);
            X1Move[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);

            X1[i]-=X1Move[i];
            if (X1[i] <= 0)
            {
                X1[i]=1400;
            }
        }

    fill(100,0,100);
    circle (randomCircleX,randomCircleY,100);
    randomCircleX+=5;
    if (randomCircleX >=1400)
    {
        randomCircleX=0;
    }
}



function drawPlayer()
{
    fill (30,97,215);
    square (playerX,playerY,25);

    if (keyIsDown(87)) //w
    {
        playerY-=5;
    }
    if (keyIsDown(83)) //s
    {
        playerY+=5;
    }
    if (keyIsDown(68)) //d
    {
        playerX+=5;
    }
    if (keyIsDown(65)) //a
    {
        playerX-=5;
    }
}

function drawExit()
{
    fill (210);
    rect (0,50,100,10);
    rect (0,200,100,10);
    textSize(30);
    text ('EXIT HERE!!',10,100);
}

function drawRandomCircle()
{
    fill (100,0,100);
    circle (randomCircleX,randomCircleY,50);
}

function mouseClicked()
{
    randomCircleX = mouseX;
    randomCircleY = mouseY;
}