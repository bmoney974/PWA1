// Bobby Newland 7-13-13

var p1Name = "Spiderman";     // player one name
var p2Name = "Batman";       // player two name

var p1H = 100;      //player one health
var p2H = 100;      // player two health

var p1H2 = 100;      //player one health
var p2H2 = 100;      // player two health

var p1H3 = 100;      //player one health
var p2H3 = 100;      // player two health

var p1RH = p1H -= Math.floor((Math.random()*50));      // player 1 remaining health
var p2RH = p2H -= Math.floor((Math.random()*50));      // player 2 remaining health
var p1RH2 = p1RH -= Math.floor((Math.random()*50));      // player 1 remaining health
var p2RH2 = p1RH -= Math.floor((Math.random()*50));      // player 2 remaining health
var p1RH3 = p1RH2 -= Math.floor((Math.random()*50));      // player 1 remaining health
var p2RH3 = p2RH2 -= Math.floor((Math.random()*50));      // player 2 remaining health


var rn = 0;
var p1d = 50;                   // player one damage
var p2d = 50;                   // player two damage
var rndNumber = (rn++);

var rnd = (p1Name + " :"+ p1RH + " ** Round 1 ** " + p2Name + ":"+ p2RH);
var rnd2 = (p1Name + " :"+ p1RH2 + " ** Round 2 ** " + p2Name + ":"+ p2RH2);
var rnd3 = (p1Name + " :"+ (p1RH3 -= 5) + " ** Round 3 ** " + p2Name + ":"+ (p2RH3-=5));

var winner1 = ("Winner: " + p1Name);
var winner2 = ("Winner: " + p2Name);
var noWinner = (" You Both Die");
var tie= ( " It's a Tie");


    var fight = function(health1,health2){

        if((p1RH <100)&& (p2RH <100)){
            rn++;
            result = alert (rnd);
        }else if(p1RH <= 0){
            alert (winner1);
        }else if (p2RH <= 0){
            alert ( winner2);
        }else if ((p1RH <= 0) && (p2RH <= 0 )) {
            alert (noWinner);
        }else{
            alert(tie);
        };
            return result
    }

    var fight2 = function(health1b,health2b){

    if((p1RH2 <100)&& (p2RH2 <100)){
        (rn++);
        result2 = alert (rnd2);
        console.log(rnd2);
    }     else if(p1RH2 <= 0){
        alert (winner1);
    }else if (p2RH2 <= 0){
        alert ( winner2);
    }else if ((p1RH2 <= 0) && (p2RH2 <= 0 )) {
        alert (noWinner);
    }else{
        alert(tie);
    };
    return result2
};

    var fight3 = function(health1c,health2c){

        if((p1RH3 >100)&& (p2RH3 >100)){
            (rn++);
            result3 = alert (rnd3);
        }else if(p1RH3 < 30 ){
            alert (winner1);
            console.log(winner1);
        }else if (p2RH3 < 30){
            alert ( winner2);
            console.log(winner2);
        }else{
            alert(tie);
            console.log(tie);
        };

    };







fight(p1RH,p2RH);
console.log(rnd);

fight2(p1RH2,p2RH2);


fight3(p1RH3,p2RH3);


/*var myCtr = 1;
var myCounter = function(newct){
    //var myCtr = 50;
    myCtr += newct;
    console.log("counter = ",myCtr);
};
myCounter(5);
myCounter(2);  */
    //console.log (roundNmber);

/*
 }else if(p1RH == 0){
 alert (winner1);
 }else if (p2RH == 0){
 alert ( winner2);
 }else if ((p1RH == 0) && (p2RH == 0 )) {
 alert (noWinner);
 }else{
 alert(tie);
 };
*/