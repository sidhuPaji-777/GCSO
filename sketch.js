var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var speed, weight;


function setup() {
  createCanvas(1000, 500);
// Creating random values for velocityX
speed = random(55, 90);
console.log(speed);
weight = random(400, 1500);
console.log(weight);

// Creating Cars
  car1 = createSprite(70, 80, 30, 17);
  car1.velocityX = speed;
  // car1.lifetime = 120;
  

  car2 = createSprite(70, car1.y+110, 30, 17);
  car2.velocityX = speed;
  // car2.lifetime = 120;

  car3 = createSprite(70, car2.y+110, 30, 17);
  car3.velocityX = speed;
  // car3.lifetime = 120;

  car4 = createSprite(70, car2.y+220, 30, 17);
  car4.velocityX = speed;
  // car4.lifetime = 120;
    

  // Creating walls
  wall1 = createSprite(930, 80, 15, 80);
  wall1.shapeColor = color(0, 191, 255);
  wall2 = createSprite(930, wall1.y+110, 15, 80);
  wall2.shapeColor = color(0, 191, 255);
  wall3 = createSprite(930, wall2.y+110, 15, 80);
  wall3.shapeColor = color(0, 191, 255);
  wall4 = createSprite(930, wall3.y+110, 15, 80);
  wall4.shapeColor = color(0, 191, 255);

}

function draw() {
  background(0, 0, 0);


  car1.collide(wall1);
  car2.collide(wall2);
  car3.collide(wall3);
  car4.collide(wall4);




if(wall1.x-car1.x < (car1.width + wall1.width)/2 || 
wall2.x-car2.x < (car2.width + wall2.width)/2 ||
wall3.x-car3.x < (car3.width + wall3.width)/2 ||
wall4.x-car4.x < (car4.width + wall4.width)/2);
{
  // car1.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22500;

  if(deformation > 180)
  {
    car1.shapeColor = color(255, 0, 0);
    car2.shapeColor = color(255, 0, 0);
    car3.shapeColor = color(255, 0, 0);
    car4.shapeColor = color(255, 0, 0);
  }

  else if(deformation < 180 && deformation>100)
  {
    car1.shapeColor = color(230, 230, 0);
    car2.shapeColor = color(230, 230, 0);
    car3.shapeColor = color(230, 230, 0);
    car4.shapeColor = color(230, 230, 0);
  }

else  
{
    car1.shapeColor = color(0, 255, 0);
    car2.shapeColor = color(0, 255, 0);
    car3.shapeColor = color(0, 255, 0);
    car4.shapeColor = color(0, 255, 0);
  }

}

// console.log(deformation);
  drawSprites();
}

