

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage;
var balloonSound;
var score=0;


function preload(){
  

  
  arrowImage = loadImage("images/arrow0.png");
  bowImage = loadImage("images/bow0.png");
  red_balloonImage = loadImage("images/red_balloon0.png");
  green_balloonImage = loadImage("images/green_balloon0.png");
  pink_balloonImage = loadImage("images/pink_balloon0.png");
  blue_balloonImage = loadImage("images/blue_balloon0.png");
  balloonSound = loadSound("Balloon popping _ burst _ blast (248BDBD-MSH).mp3")

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 
  
  // creating bow to shoot arrow
  bow = createSprite(width-50,height);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  
 arrowGroup=new Group();
pinkballoonGroup=new Group();
  blueballoonGroup=new Group();
greenballoonGroup=new Group();
redballoonGroup=new Group(); 
  monsterGroup = new Group();

  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  

}

function draw() {
background ("yellow")
 
  //moving bow
  bow.y = World.mouseY
 if(touches.length > 0  || keyDown("spce")){
    arrow.velocityX = -6
    touches = [];
  }
 
  
if (arrowGroup.isTouching(redballoonGroup)){  
  arrowGroup.destroyEach();
   redballoonGroup.destroyEach();
  balloonSound.play( );
  score=score+10
   }
  if (arrowGroup.isTouching(blueballoonGroup)){  
    arrowGroup.destroyEach();
    balloonSound.play( );
    blueballoonGroup.destroyEach();
  score=score+20
   }
  if (arrowGroup.isTouching(pinkballoonGroup)){  
    arrowGroup.destroyEach();
pinkballoonGroup.destroyEach();
  balloonSound.play( );                      
  score=score+8
   }
    if(arrowGroup.isTouching(greenballoonGroup)){ 
   arrowGroup.destroyEach();
greenballoonGroup.destroyEach();
balloonSound.play( );                         
score=score+5
   }
  
   // release arrow when space key is pressed
  if (touches.length>0 || keyDown("space")) {

    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
     touches = [];
  }
 var selectballoon = Math.round(random(1,4))
  if(frameCount % 80==0){
    if(selectballoon==1){
      greenballoon();
    }else if(selectballoon==2){
      blueballoon();
    }else if(selectballoon==3){
      redballoon();
      
  }else{
      pinkballoon();
    }
    
  }

    
  
  drawSprites();
   textSize=20;
  text("Score: " + score,width/2-60,height);
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(width,height);
  arrow.addImage(arrowImage)
  arrow.velocityX = -10;
  arrow.scale = 0.3;
  arrow.y=bow.y;
 arrowGroup.add(arrow)

    return arrow;
}

function redballoon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX=10;
  red.lifetime=200;
  redballoonGroup.add(red)
  red.scale=0.1;

}
function greenballoon(){
  var green = createSprite(0,Math.round(random(30,350)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX=10;
  green.lifetime=200;
    greenballoonGroup.add(green)
  green.scale=0.1;

}
function blueballoon(){
  var blue = createSprite(0,Math.round(random(20,300)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX=10;
  blue.lifetime=200;
  blueballoonGroup.add(blue)
  blue.scale=0.1;

}
function pinkballoon(){
  var pink = createSprite(0,Math.round(random(20,300)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX=10;
  pink.lifetime=200;
pinkballoonGroup.add(pink)


}
