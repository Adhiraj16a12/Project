var car,Wall;
function setup() {
  createCanvas(400, 400);
  car=createSprite(60,200,20,20); 
  car.velocityX=4  ;
  Wall=createSprite(350,200,20,100);
}

function draw() {
  background(205,153,0);
  drawSprites();
  if (randomVelocity(car,wall)){
}

function randomVelocity()
{
  car.velocityX=random(3,8,4);
  if(car.x- wall.x < wall.width/2 + car.width/2 && 
    car.y - wall.y < wall.width/2 + car.width/2 &&
    wall.x- car.x < wall.width/2 + car.width/2&&
    wall.y- car.y < wall.width/2 + car.width/2){
    
  
  }
  if(  car.velocityX>2 ){
  car.shapeColor = "pink";

  }
  else{
  return true;
  }
}
