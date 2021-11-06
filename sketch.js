var score =0;

var background,Zombie1,Zombie2,Zombie3,bullet,gun;

var backgroundImage, Zombie1Image, Zombie2Image, Zombie3Image, bulletImage, gunImage;

var Zombie1Group, Zombie2Group, Zombie3Group, bulletGroup, gunGroup;

var life =3;
var score =0;
var gamestate =1

var gameState=1
function preload(){
  bgImage=loadImage("Images/background.jpg")
  bg2Image=loadImage("Images/background2.jpg")
  bulletImage=loadImage("Images/bullet.png")
  gunImage=loadImage("Images/gun.png")
  Zombie1Image=loadImage("Images/Zombie1.png")
  Zombie2Image=loadImage("Images/Zombie2.png")
  Zombie3Image=loadImage("Images/Zombie3.png") 
}
function setup() {
  createCanvas(800,800)
  bg = createSprite(50,height/2,100,height)
  bg.addImage(bgImage)


  gun = createSprite(50,width/2,100,height)
  gun.addImage(gunImage)
  gun.scale=0.2;

  scoreboard = createElement("h1");
  zombie1Group = new Group()
  zombie2Group = new Group()
  zombie3Group = new Group()

  bulletGroup = new Group()
}
function draw (){
  background(255)

  scoreboard.html("score: "+score)
  scoreboard.style('color:blue')
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY

  if (frameCount % 60 ===0){
    drawzombie1();
  }

  if (frameCount % 80 ===0){
    drawzombie2();
  }

  if (frameCount % 100 ===0){
    drawzombie3();
  }

  if(keyDown("space")){
    shootbullet();
  }

  if(zombie1Group.collide(bulletGroup)){
    zombie1Group.destroyEach();
    if(life>0){
      score=score+1
    }
  }

  if(zombie2Group.collide(bulletGroup)){
    zombie2Group.destroyEach();
    if(life>0){
      score=score+1
    }
  }

  if(zombie3Group.collide(bulletGroup)){
    zombie3Group.destroyEach();
    if(life>0){
      score=score+1
    }
  }

 }
  
  drawSprites()
}
function drawzombie1(){
  Zombie1 = createSprite(800,random(20,780),40,40);
  Zombie1.addImage(Zombie1Image);
  Zombie1.scale = 0.2;
  Zombie1.velocityX = -5;
  Zombie1.lifetime = 400;
  zombie1Group.add(Zombie1);
}
function drawzombie2(){
  Zombie2 = createSprite(800,random(20,780),40,40)
  Zombie2.addImage(Zombie2Image)
  Zombie2.scale = 0.4;
  Zombie2.velocityX = -5;
  Zombie2.lifetime = 400;
  zombie2Group.add(Zombie2)
}
function drawzombie3(){
  Zombie3 = createSprite(800,random(20,780),40,40)
  Zombie3.addImage(Zombie3Image)
  Zombie3.scale = 0.08;
  Zombie3.velocityX = -5;
  Zombie3.lifetime = 400;
  zombie3Group.add(Zombie3)
}
function handleGameOver(zombieGroup){
  life=life-1;
  zombieGroup.destroyEach();


  if(life===0){
    console.log("game over")
  }
}


function shootbullet(){
  bullet = createSprite(150,width/2,50,20)
  bullet.y=gun.y-20
  bullet.addImage(bulletImage)
  bullet.scale=0.12
  bullet.velocityX=7;
  bulletGroup.add(bullet)
}