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
     var randomNum = Math.floor((Math.random()*10) + 1);     // random number




    var dom= {
           input: document.getElementById("input"),     // object literal
           output: document.querySelector("#output"),
           button: document.getElementById("button"),
            form: document.getElementById("theForm")
        };
    console.log(dom.input);
    console.log(dom.output);
    console.log(dom.button);

        var button1 =    dom.button
  // button.onclick = validateNumber;

    var playerGuess = dom.input;

    var formForm = dom.form ;
      var inIn= document.getElementById("input");
    //formForm.onsubmit = validateNumber;

            //console.log(dom.button);
              var validateNumber = function(playerGuess){
                //  "use strict";

                 var testNum = 4;   // test num
                //  console.log(dom.input);
                  console.log(playerGuess);

              //  var playerGuess =   parseInt(dom.input);
                  if (isNaN(playerGuess)){
                      dom.output.innerHTML = "Please enter a valid number.";
                  }else if((playerGuess < 1)|| (playerGuess > 10)){
                       dom.output.innerHTML = " Please enter a number between 1 and 10."
                  }else if((playerGuess > 1)&& (playerGuess < 10)&& (playerGuess < randomNum)){
                       dom.output.innerHTML = "Your number is to low try again."
                  }else if((playerGuess > 1)&& (playerGuess < 10)&&(playerGuess > randomNum)){
                       dom.output.innerHTML = " Your number is to high try again."
                  }else if(playerGuess === randomNum){
                        dom.output.innerHTML = " Great Job! You guessed it! The number is "+ randomNum
                  }else{
                        dom.output.innerHTML = " Please enter in the correct number"
                  }
                 //


                  //e.preventDefault();

              };
     dom.button.addEventListener("click",validateNumber,false);


//    //validateNumber(document.getElementById("input"));
//    function init(){
//        "use strict";
//        document.getElementById("theForm").onsubmit = validateNumber();
   // }
    //window.onload = init;

})();