var player,wormGroup;
var score=0;
var playerImage,swampImage,wormImage;
var swamp;
function preload() {
  //load game assets
  playerImage=loadImage("./images/frog.png");
  swampImage=loadImage("./images/swampImg.png");
  wormImage=loadImage("./images/worm.png");
}


function setup() {
  createCanvas(600,600);
  swamp=createSprite(300,300);
  swamp.addImage(swampImage);
  swamp.scale=2.5;
  player=createSprite(40,550,30,30);
  player.addImage(playerImage);
  player.scale=0.3;
  wormGroup=new Group();
}

function draw() {
  background("black");
  stroke("red");
  noFill();
  ellipse(100,350,40,30);  
  player.x=mouseX;
  player.y=mouseY;

if(player.x<140&&player.x>60&&player.y<380&&player.y>320)
{
  text("NO CHEATING!",200,200);
  player.x=30;
  player.y=30;
}
  generateWorms();
  for(var i=0;i<(wormGroup.length);i++){
    var temp=wormGroup.get(i);
    if(player.isTouching(temp))
    {
      score+=1;
      temp.destroy();
      temp=null;
    }
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
//  console.log("aree",frameCount);
  if(frameCount%30==0){
    var worm=createSprite(100,350,40,5);
    worm.addImage(wormImage);
    worm.scale=random(0.1,0.3);
    console.log(frameCount);
    worm.velocityX=random(-4,4);
    worm.velocityY=random(-4,4);
    wormGroup.add(worm);
  }
}