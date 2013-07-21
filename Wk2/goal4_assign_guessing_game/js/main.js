/**
 * GUESSING GAME:
 *
 * Created By:  Bobby Newland
 * Date:  07-20 -13
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
     var randomNum = Math.floor(Math.random()*10 + 1);     // random number

//     var theButton = document.getElementById("button").value;
//    theButton.onsubmit = validateNumber();


    var dom= {
           input: document.querySelector("#input"),     // object literal
           output: document.querySelector("#output"),
           button: document.getElementById("button")
        };
            dom.button.onclick= console.log("button test");

            //console.log(dom.button);
              var validateNumber = function(){
                  "use strict";
                 var testNum = 4;   // test num

                //  dom.button.onclick = validateNumber();

                var playerGuess =   parseInt(dom.input);
                  if (isNaN(playerGuess)){
                      dom.output.innerHTML = "Please enter a valid number.";
                  }else if((playerGuess < 1)|| (playerGuess > 10)){
                       dom.output.innerHTML = " Please enter a number between 1 and 10."
                  }else if((playerGuess > 1)&& (playerGuess < 10)&& (playerGuess < randomNum)){
                       dom.output.innerHTML = "Your number is to low try again."
                  }else if((playerGuess > 1)&& (playerGuess < 10)&&(playerGuess > randomNum)){
                       dom.output.innerHTML = " Your number is to high try again."
                  }else if(playerGuess === randomNum){
                        dom.output.innerHTML = " Great Job! You guessed it!"
                  }else{
                        dom.output.innerHTML = " Please enter in the correct number"
                  }
                 // return false;
                 // e.preventDefault();

              };


})();