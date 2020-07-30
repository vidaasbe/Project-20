var car, wall;
var speed, weight;
var deformation;



function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000, 200, 60, 200);

  speed = random(55, 90);
  weight = random(400, 1500); 
}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;

  car.deformation = 20

  if(car.deformation > 100){

car.shapeColor = "green";

  }

  if(car.deformation < 100 && car.deformation > 180){

    car.shapeColor = "yellow";
    
      }

      if(car.deformation > 180){

        car.shapeColor = "green";
        
          }

  drawSprites();
}