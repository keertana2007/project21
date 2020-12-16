var bullet;
var wall,thickness;
var speed;
var weight;


function setup() {
  createCanvas(1600,400);
   bullet=createSprite(50, 200, 60, 10);
   wall=createSprite(1200,200,thickness,height/2);

  speed=random(45,110);
  weight = random(600, 1100);
  thickness = random(22, 83);
}

function draw() {
  background("turquoise");
  bullet.velocityX=speed;  
  

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  }
  if (damage > 10) {
    wall.shapeColor = color(255, 0, 0);
  }
  
  if (damage < 10) {
    wall.shapeColor = color(0, 255, 0);
  }

  drawSprites();   
  }
  

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x; if (bulletRightEdge >= wallLeftEdge) {
    return true
    
  }
  return false
}