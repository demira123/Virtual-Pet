var dog,sadDog,happyDog;
var milk, feed, addFood

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milk=loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
feed=createButton("Feed the Dog")
feed.position(700,95)
feed.mousePressed(feedDog)
addFood=createButton("Add Food")
addFood.position(800,95)
addFood.mousePressed(addFood)
}

function draw() {
  background(46,139,87);
  drawSprites();
  fedTime=database.ref('FeedTime')
  fedTime.on("value",function(data){
    lastFed=data.val()
  
  )}
  fill(255,255,254)
    textSize(15)
if (lastFed>=12){
  text("Last Fed:"+lastFed%12+"PM",350,30)
}
else if(lastFed==0){
  text("Last Fed: 12 AM",350,30)
}
else{
  text("Last Fed:"+lastFed+"AM",350,30)
}

  


//function to read food Stock
function feedDog(){
  dog.addImage(happyDog)
  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
    
  }
function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}
function feedDog(){
  dog.addImage(happyDog)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock()
    FeedTime:hour()
  })
}

//function to update food stock and last fed time


//function to add food in stock
