function setup()
{
    createCanvas(1400,700);
    enemy1Speed=floor(random(1,11));
    enemy2Speed=floor(random(1,11));
}

//variables
var playerX=700;
var playerY=350;
var enemy1X=0;
var enemy1Y=200;
var enemy2X=1400;
var enemy2Y=500;
var enemy1Speed=10;
var enemy2Speed=10;
var xMouse=675;
var yMouse=325;

function draw()
{
    background(200);

    player();

    enemy1and2();

    exit();

    mouse();

    border();
}

function border()
{
    fill(50);
    rect(0,0,10,700);
    rect(0,0,1400,10);
    rect(0,690,1400,10);
    rect(1390,0,10,1400);
}

function mouseClicked ()
{
    xMouse = mouseX;
    yMouse = mouseY; 
}

function keyPressed() 
{
    console.log(key, '', keyCode);
    return false;
}

function player()
{
    //player
    fill (0,0,160);

    if (playerY<=0 && playerX>=50 && playerX<=200)
        {
            textSize (50);
            text ('YOU WIN!',600,350);
        }
    else{
    circle (playerX,playerY,45);
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
}

function enemy1and2()
{
    //ememy 1
    fill (0,100,0);
    rect (enemy1X,enemy1Y,70,30)

    enemy1X+=enemy1Speed;
    if (enemy1X>=1400)
    {
        enemy1X=0;
    }

    //enemy 2
    fill (100,0,0);
    rect (enemy2X, enemy2Y, 120, 60);

    enemy2X-=enemy2Speed;
    if (enemy2X<=0)
    {
        enemy2X=1400;
    }
}

function exit()
{
    //exit
    fill (20);
    rect (50,0,10,50);
    rect (200,0,10,50);
    textSize (15);
    text ('EXIT HERE', 90, 30);

}

function mouse()
{
    //mouse click
    fill (255,255,0);
    square (xMouse,yMouse,50);
}