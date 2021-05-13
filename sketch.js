var dog;

function preload()
{
Dog = loadImage("images/dogimg.png");
dog1 = loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog = createSprite(250,250,20,20)
  dog.addImage(Dog);
  dog.scale = 0.2;
}


function draw() {  
  background(46,139,87)
  fill("cyan")
  textSize(20)
  text("Press the Up arrow key to feed dog",100,150)
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1);
  }
  drawSprites();
  
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
   if(x<=0){
     x=0;
   }else{
     x=x-1;
   }
  database.ref('/').update({
    Food:x
  })
}


