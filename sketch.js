var ground,player,playerImg,groundImg,ground2;
function preload(){
playerImg=loadImage("images/scientist.png")
groundImg=loadImage("images/ground.png")
}
function setup() {
  createCanvas(800,400);
  player=createSprite(400, 200, 50, 50);

player.addImage(playerImg)
player.scale=0.5

ground=createSprite(400,400,800,20);
ground.addImage(groundImg)
ground.scale=1

ground2=createSprite(400,350,800,20);
ground2.visible=false;
}

function draw() {
  background(0,255,255);  
  player.velocityY=5;
  player.velocityY=player.velocityY+0.5
player.collide(ground2)
if(keyDown(UP_ARROW)){
  player.velocityY=player.velocityY+3
}
if(keyDown(RIGHT_ARROW)){
  player.x=player.x+3
}
if(keyDown(LEFT_ARROW)){
  player.x=player.x-3
}


  drawSprites();
}