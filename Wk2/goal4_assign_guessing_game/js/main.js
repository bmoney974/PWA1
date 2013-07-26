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

    var randomNum = Math.floor((Math.random()*10) +1);     // random number




    var dom= {
           input: document.getElementById("input"),     // object literal
           output: document.querySelector("#output"),
           button: document.getElementById("button"),
            form: document.getElementById("theForm")
        };
    console.log(dom.input);
    console.log(dom.output);
    console.log(dom.button);








    var guessCount = 3;    // guess count


              var validateNumber = function(playerGuess){   // validate guess

                  console.log("Guess Count",guessCount);


                  playerGuess = parseInt(dom.input.value);   // player guess input



                //  console.log(dom.input);
                  console.log(playerGuess);



                  if (isNaN(playerGuess)){          // if guess is not a number
                      dom.output.innerHTML = "Please enter a valid number. " +
                          "You have " + guessCount + " guesses remaining";
                  }else if((playerGuess < 1)|| (playerGuess > 10)){          // if guess is not between 1 & 10
                       dom.output.innerHTML = " Please enter a number between 1 and 10.";


                  }else if((playerGuess > 1)&& (playerGuess < 10)&& (playerGuess < randomNum)){
                       dom.output.innerHTML = "Your number is too low try again. " ;
                            // if guess is too low

                  }else if((playerGuess > 1)&& (playerGuess < 10)&&(playerGuess > randomNum)){
                       dom.output.innerHTML = " Your number is too high try again.";
                             // if guess is too high

                  }else if(playerGuess === randomNum){
                        dom.output.innerHTML = " Great Job! You guessed it! The number is "+ randomNum +" You Win!!";
                         // if guess correct
                      dom.button.removeEventListener("click",validateNumber,false);


                  }else if(playerGuess !== randomNum){   // guess counter
                      guessCount--;

                  }else if (guessCount === 0){
                      dom.button.removeEventListener("click",validateNumber,false);   // 3 guess disable button
                      dom.output.innerHTML = " Sorry you are out of tries. Game Over";
                  }
                  else{
                        dom.output.innerHTML = " Please enter in the correct number ";


                  }





              };
                     dom.button.addEventListener("click",validateNumber,false);




})();