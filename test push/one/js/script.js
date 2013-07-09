// Bobby Newland Assignment Week 4
// if I run an egg farm and need to produce a certain amount of eggs a month to stay in business
// but not too many to have a surplus  (each hen house has 10 chickens that produce 20 eggs per month )

var houses = prompt("How many hen houses do you have?");
var a = parseInt(houses);

var eggMin = 500
var eggMax = 1500

var eggFarm = function(eggs, chickens){
     var amount = (eggs * chickens) * houses

    return amount;


}

var totalEggs = eggFarm(20, 10);

if (totalEggs <= eggMin){
    console.log("You only produced " + totalEggs + " this month, get more hen houses");
}else if(totalEggs > eggMin && totalEggs <= eggMax){
    console.log("Good job! You produced " + totalEggs + " eggs that\'s enough for the month");
}else if(totalEggs > eggMax){
    console.log("Slow Down! That\'s too many eggs to sell they will go bad")

}



