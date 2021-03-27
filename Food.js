class Food{
    constructor(){
     
        var foodStock
        var lastFed
        
    }
  
    updateFoodStock(count){
        database.ref('/').update({
                FoodStock: count
        })}
        getFoodStock(){
            var FoodStockRef = database.ref('Food') //.ref() -> will directly refer to the database
        FoodStockRef.on("value", function(data){
           FoodStock = data.val()
        })
        
    }
    }
    
