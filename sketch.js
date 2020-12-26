var fixedRect, movingRect;
var obj
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj = createSprite(200,200,20,20)
  obj.shapeColor="cyan";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(obj,movingRect)){
    movingRect.shapeColor = "red";
    obj.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    obj.shapeColor = "green";
  }
  drawSprites();
  
}
