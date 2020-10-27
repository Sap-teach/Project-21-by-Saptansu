var bullet, wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
  //for speed and weight of car
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);


  //for creating bullet
  bullet=createSprite(50,200,70,30);
  bullet.velocityX=speed;

  //for wall
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
}



function draw() {
  background(123, 254, 254); 
  //bullet.collide(wall);
  
  //for executing hasCollided
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>=10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor=color(0, 255, 121);
    }
  }
  drawSprites();
//for txt info
fill("black");
stroke("black");
textSize(25);
text("PLEASE VIEW THE PAGE IN 80% ZOOM TO ANALYSE THE PROJECT NICELY", 50,350);

//for hasCollided fnction logic
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
}
