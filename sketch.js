var canvas, backgroundImage;
var gameState=1;
var pittie;
var gram;
var dia;
var truck;
var purse;
var bg,bg2;
var nxt;
var but;
var treats=0;
var ground1;
var treats1;
var toy;
var baddyGroup;

function preload(){
dia= loadAnimation("dial.png");
Dia2= loadAnimation("Dia2.png");
Dia3= loadAnimation("Dia3.png");
nxt= loadImage("nxt.png");
gramANI=loadAnimation("grammy.png");
gram=loadAnimation("gram.png");
pittie=loadAnimation("dog.png");
pittieANI=loadAnimation("doggy2.png","doggy5.png","doggy1.png","doggy4.png","doggy3.png");
baddy1=loadAnimation("bad man.png");
purse=loadImage("purse.png");
bg=loadImage("bg1.png");
road=loadImage("jbg.png");
trot=loadAnimation("treats1y.png");
trot1=loadAnimation("1r.png");
trot2=loadAnimation("2r.png");
trot3=loadAnimation("3r.png");
trot4=loadAnimation("4r.png");
trot5=loadAnimation("5r.png");
trot6=loadAnimation("6r.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);


   bg1 = createSprite(width/4,height/2,width,2);
   bg1.addImage(road);
   bg1.velocityX = 8;
   //bg1.x=width/4;
  bg1.scale=4.6;
   
  
 baddyGroup=new Group();
  
 


 gram1=createSprite(1400,400);
 gram1.addAnimation("grammy",gram);
 gram1.addAnimation("gram",gramANI);
 gram1.changeAnimation("grammmy");
 gram1.scale=2.7;
 
 purse1=createSprite(100,560);
 purse1.addImage(purse);
 purse1.scale=1;
 purse1.visible=false;

 nxt1=createSprite(1400,150);
 nxt1.addImage(nxt);
 nxt1.scale=0.3



treats1 = createSprite(1300,80,160,300);
treats1.addAnimation("Blank",trot);

treats1.addAnimation("1",trot1);
treats1.addAnimation("2",trot2);
treats1.addAnimation("3",trot3);
treats1.addAnimation("4",trot4);
treats1.addAnimation("5",trot5);
treats1.addAnimation("6",trot6);

treats1.changeAnimation("Blank");
treats1.scale=0.5
treats1.visible=true;





 pittie1=createSprite(100,460);
 pittie1.addAnimation("dog",pittie);
 pittie1.addAnimation("pittieA",pittieANI);
 pittie1.changeAnimation("dog");
 pittie1.velocityY=0;
 pittie1.scale=1.6;
 


 dia1=createSprite(700,200);
 dia1.addAnimation("dial",dia);
 dia1.changeAnimation("dial");
 dia1.addAnimation("dial2",Dia2);
 dia1.addAnimation("dial3",Dia3);
 dia1.scale=0.9;
}

function mouseClicked(nxt1){

  gameState = 2;
  console.log(frameCount);
 

}

function draw(){
 
  background(0);

  if(frameCount % 200 === 0){
    gram1.changeAnimation("gram");
  }

  if(gameState===2){
    treats1.visible=true; 
  textSize(20);
  fill("white");
  text(treats,200,200);
  
  
  gram1.visible=false;
  dia1.visible=false;
  nxt1.destroy();
  


 
   
  pittie1.x=1200;
  pittie1.y=640
  pittie1.scale=2.4;
  pittie1.changeAnimation("pittieA");
 
  bg1.visible=true;
  
  spawnBaddies();

  if(baddyGroup.isTouching(pittie1)){
    gameState = 4;
  }
   
  
  treats1.visible=true;

console.log(frameCount);
  if (frameCount % 100 === 1){
  text( "Keep it up, Rex! PLUS 1 TREAT",700,200);
  treats1.changeAnimation("1");
  treats = treats+1;
  //baddyGroup.setVelocityXEach(13);
  
  
  
  }

  if (frameCount % 500 === 1){
    text( "Way to go , Rex! PLUS 1 TREAT",700,200);
    treats1.changeAnimation("2");
    treats = treats+1;
    //baddyGroup.setVelocityXEach(15);
    
    }
  
  if (frameCount % 1500 === 1){
      text( "Nice job , Rex! PLUS 1 TREAT",700,200);
      treats1.changeAnimation("3");
     // baddyGroup.setVelocityXEach(25);
      }

  if (frameCount % 2000 === 1){
        text( "WOWIE, Rex! PLUS 1 TREAT",700,200);
        treats1.changeAnimation("4");
       // baddyGroup.setVelocityXEach=(25);
        treats = treats+1;


        }

  if (frameCount % 2100 === 1){
          text( "WOWIE, Rex! PLUS 1 TREAT",700,200);
          treats1.destroy();
          gameState=3;
         
          }
  


if(keyDown(UP_ARROW)) {
  
  pittie1.y=300;
}

if(keyDown(DOWN_ARROW)) {
  
  pittie1.y=1100;
}

pittie1.debug=true;
pittie1.setCollider("rectangle",pittie.y,pittie.x,60,15);

if(keyWentUp("up")||keyWentUp("down")){
 pittie1.velocityY=0;
}

} 

if (bg1.x > 500 ){

  bg1.x = 450;
  
  console.log(bg1.x);
}

 if(gameState===1){
   background(bg);
   bg1.visible=false;
   console.log(frameCount);
   
  
 }

 
if(gameState===3){
  purse1.x=1100;
  purse1.y=500;
  pittie1.scale=1.6;
  pittie1.x=1000;
  pittie1.y=490;
  dia1.changeAnimation("dial2");
  dia1.visible=true;
  bg1.visible=false;
  pittie1.changeAnimation("dog");
  baddy.visible=false;
  gram1.visible=true;
  background(bg);
  treats1.destroy();
  purse1.visible=true;
  
}

if(gameState===4){
  pittie1.x=600;
  pittie1.y=900;
  bg1.visible=false;
  pittie1.changeAnimation("dog");
  baddyGroup.visible=true;
  baddyGroup.setLifetimeEach(-1)
  baddyGroup.setVelocityXEach(0);
  dia1.changeAnimation("dial3");
  dia1.visible=true;
  gram1.visible=false;
  background(road);
  purse1.visible=false;
  }

  if(keyCode===32) {
    gameState = 5;
  }


if(gameState===5){
  pittie1.x=600;
  pittie1.y=600;
  bg1.visible=false;
  pittie1.changeAnimation("dog");
  baddyGroup.visible=true;
  baddyGroup.setLifetimeEach(-1)
  baddyGroup.setVelocityXEach(0);
  dia1.changeAnimation("dial3");
  dia1.visible=true;
  gram1.visible=true;
  background(bg);
  treats1.destroy();
  purse1.visible=false;
  
}

if(keyCode===13) {
  gameState = 1;
}


text(mouseX+","+mouseY,mouseX,mouseY);
drawSprites();
if(gameState===1){
  
  textSize(20);
text("Click on the screen to start",1180,50);
 
}
if(gameState===1){
  
  if(gameState===4){
  
  textSize(20);
  text("Click Space Bar To Continue",1180,50);
   
  }

  if(gameState===4){
  
    textSize(20);
    text("Click Enter  To Try Again",1180,50);
     
    }
 
}

}


function spawnBaddies(){
  if (frameCount % 200 === 0) {
    baddy = createSprite(200, 670, 100, 100);
    baddy.addAnimation("bad",baddy1);
    baddy.velocityX = random(7,12);
    baddy.scale=0.65;
    baddy.lifetime=600;
    baddyGroup.add(baddy);
    baddy.debug=true;
    baddy.setCollider("rectangle",5,5,9,9);
    
  }

  

}