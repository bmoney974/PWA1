// Bobby Newland 7-13-13

var p1Name = "Spiderman";     // player one name
var p2Name = "Batman";       // player two name

var p1H = 100;      //player one health
var p2H = 100;      // player two health

var p1RH = p1H -= Math.ceil((Math.random()*50)+26);      // player 1 remaining health
var p2RH = p2H -= Math.ceil((Math.random()*50)+26);      // player 2 remaining health
var rn = 0;
var p1d = 50;                   // player one damage
var p2d = 50;                   // player two damage
var rndNumber = (rn++);
var rnd = (p1Name + " :"+ p1RH + " ** Round "+ rn +" ** " + p2Name + ":"+ p2RH);  // round display

var winner1 = ("Winner: " + p1Name);
var winner2 = ("Winner: " + p2Name);
var noWinner = (" You Both Die");
var tie= ( " It's a Tie");


    var fight = function(health1,health2){

        if((p1RH <100)&& (p2RH <100)){
            rn++;
            result = alert (rnd);

                }else if(p1RH == 0){
                    alert (winner1);
                }else if (p2RH == 0){
                    alert ( winner2);
                }else if ((p1RH == 0) && (p2RH == 0 )) {
                    alert (noWinner);
                }else{
                    alert(tie);
            };
            return result
        };

       console.log(rn);

fight(p1RH++,p2RH++);
console.log(rnd);
fight(p1RH++,p2RH++);
console.log(rnd);
fight(p1RH++,p2RH++);
console.log(rnd);

/*var myCtr = 1;
var myCounter = function(newct){
    //var myCtr = 50;
    myCtr += newct;
    console.log("counter = ",myCtr);
};
myCounter(5);
myCounter(2);  */
    //console.log (roundNmber);