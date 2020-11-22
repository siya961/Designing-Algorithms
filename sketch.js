var fixed 
var moving

function setup() {
  createCanvas(800,400);
fixed = createSprite(400, 200, 50, 50);
fixed.shapeColor = "blue";

moving = createSprite(200, 200, 50, 80);
moving.shapeColor = "blue";
moving.velocityX = -5;
}

function draw() {
  background("yellow");
  
  /*
  //collision 
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  
  if(moving.x - fixed.x < fixed.width / 2 + moving.width / 2 
     && fixed.x - moving.x < fixed.width / 2 + moving.width / 2
     && moving.y - fixed.y < fixed.height / 2 + moving.height / 2 
     && fixed.y - moving.y < fixed.height / 2 + moving.height / 2){

     moving.shapeColor = "purple";
     fixed.shapeColor = "purple";
     }
     
     else{

     moving.shapeColor = "blue";
     fixed.shapeColor = "blue";
     }*/

//bounceoff
if(moving.x - fixed.x < fixed.width / 2 + moving.width / 2 
  && fixed.x - moving.x < fixed.width / 2 + moving.width / 2){
    
    moving.velocityX = moving.velocityX*(-1);
    fixed.velocityX = fixed.velocityX*(-1);

  }

  if(moving.y - fixed.y < fixed.height / 2 + moving.height / 2 
  && fixed.y - moving.y < fixed.height / 2 + moving.height / 2){

    moving.velocityY = moving.velocityY*(-1);
    fixed.velocityY = fixed.velocityY*(-1);
  }

  drawSprites();
}