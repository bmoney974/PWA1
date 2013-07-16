/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/
(function(){

   var p1Arr = ["Spiderman",20,100];
   var p2Arr = ["Batman",20,100];


    console.log("FIGHT!!!");

    //player name
//    var playerOneName = "Spiderman";
//    var playerTwoName = "Batman";
//
//    //player damage
//    var player1Damage = 20;
//    var player2Damage = 20;
//
//    //player health
//    var playerOneHealth = 100;
//    var playerTwoHealth = 100;

    //initiate round
    var round=1;

    function fight(){
        alert(p1Arr[0]+":"+p1Arr[2]+"  *START*  "+p2Arr[0]+":"+p2Arr[2]);
        for (var i = 0; i < 10; i++)
        {
            var f1 = Math.floor(Math.random()*p1Arr[1]+p1Arr[1] *.5);
            var f2 = Math.floor(Math.random()*p2Arr[1]+p2Arr[1] *.5);

            //inflict damage
            p1Arr[2]-=f1;
            p2Arr[2]-=f2;

            console.log(p1Arr[0]+": "+p1Arr[2] + " " + p2Arr[0]+":"+p2Arr[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(p1Arr[0]+":"+p2Arr[2]+"  *ROUND "+round+" OVER"+"*  "+p2Arr[0]+":"+p2Arr[2]);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        if (p1Arr[2] < 1 && p2Arr[2] < 1)
        {
            result = "You Both Die";
        } else if(p1Arr[2] < 1){
            result =p2Arr[0]+" WINS!!!"
        } else if (p2Arr[2] < 1)
        {
            result = p1Arr[0]+" WINS!!!"
        };
       return result;
    };

    fight();

})();