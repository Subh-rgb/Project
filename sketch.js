vAar music;
var Ball;
var Surface1 , Surface2 , Surface3 , Surface4;
var Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(1000,600);

    //create 4 different surfaces
    Surface1 = createSprite(125,550,250,100);
    Surface1.shapeColor = "red";
    
    Surface2 = createSprite(375,550,250,100);
    Surface2.shapeColor = "green";

    Surface2 = createSprite(625,550,250,100);
    Surface2.shapeColor = "blue";

    Surface2 = createSprite(875,550,250,100);
    Surface2.shapeColor = "yellow";
   
    //create box sprite and give velocity
    Ball = createSprite(random(50,950),90,20,20)
    Ball.shapeColor = "white"

    Ball.velocityX = 5;
    Ball.velocityY = 5;
}

function draw() {
    background("black");
    //create edgeSprite
    Edges = createEdgeSprites
    // Ball.bounceOff(Surface1);
    // Ball.bounceOff(Surface2);
    // Ball.bounceOff(Surface3);
    // Ball.bounceOff(Surface4);

    Ball.bounceOff(Edge);


    if (Ball.isTouching(Surface1) && Ball.bounceOff(Surface1) ){
        Ball.shapeColor = red;
    }
    if (Ball.isTouching(Surface2) && Ball.bounceOff(Surface2) ){
        Ball.shapeColor = green;
    }
    if (Ball.isTouching(Surface3) && Ball.bounceOff(Surface3) ){
        Ball.shapeColor = blue;
    }
    if (Ball.isTouching(Surface3) && Ball.bounceOff(Surface3) ){
        Ball.shapeColor = yellow;
    }
  drawSprites();
}
