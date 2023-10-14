var score = 0;
var piedrasGroup, piedra; 
var latasGroup, lata;
var resortera;
var gameState=1;
var life = 3;

function preload()
{
	lataimg = loadImage("tomate.png")
	piedraimg = loadImage("piedra.png")
	resorteraimg = loadImage("resortera.png")
}

function setup() {
	createCanvas(800, 800);
	
	resortera = createSprite(50, height/2-50, 50,50);
  	resortera.addImage(resorteraimg);
  	resortera.scale = 0.02;

  	piedrasGroup = createGroup();
	latasGroup = createGroup();
	
	heading= createElement("h1");
  	scoreboard= createElement("h1");
}

    

function draw() {
	background("grey");
	
	heading.html("Vidas: "+life)
	heading.style('color:red'); 
	heading.position(150,20)

	scoreboard.html("Puntuación: "+score)
	scoreboard.style('color:red'); 
	scoreboard.position(width-200,20)

	if(gameState===1){
		resortera.y= World.mouseY

		if (frameCount % 50 === 0) {
			drawLatas();
		}
	}

	if(keyWentDown("space")){
		shootPiedra();
	}
    
	if(piedrasGroup.collide(latasGroup)){
		choquedepiedraylata(latasGroup);
	}
	drawSprites();
}
  
function drawLatas(){
	lata = createSprite(800,random(20,780),40,40);
	lata.addImage(lataimg);
	lata.scale = 0.2;
	lata.velocityX = -8;
	lata.lifetime = 400;
	latasGroup.add(lata);
}

function shootPiedra(){
	piedra = createSprite(150, width/2, 50,50);
	piedra.lifetime = 400;
	piedra.y = resortera.y-20;
	piedra.addImage(piedraimg);
	piedra.scale = 0.10;
	piedra.velocityX = 7;
	piedrasGroup.add(piedra)
}

function choquedepiedraylata(latasGroup){
	if(life > 0) {
		score = score + 1;
	}
	latasGroup.destroyEach()
    piedrasGroup.destroyEach()
}
 

