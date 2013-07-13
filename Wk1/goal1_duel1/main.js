// Bobby Newland 7-13-13

var p1Name = "Spiderman";     // player one name
var p2Name = "Batman";       // player two name

var p1H = 100;      //player one health
var p2H = 100;      // player two health

var p1RH = p1H -= Math.ceil(Math.random()*50);      // player 1 remaining health
var p2RH = p2H -= Math.ceil(Math.random()*50);

var p1d = 50;                   // player one damage
var p2d = 50;                   // player two damage

var rnd = (p1Name + " :"+ p1RH + " ** Round 1 ** "+ p2Name + ":"+ p2RH);
var fight = function(health1,health2){

    if((p1RH <100)&& (p2RH <100)){
      result = alert (rnd);
        };
        return result
    };
    var test = fight(p1RH,p2RH);
    console.log(test);
