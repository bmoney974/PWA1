/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        var uName = document.getElementById("f_username"); // user name
        var email = document.getElementById("f_email"); // email
        var pNum = document.getElementById("f_phone"); //phone number
        var ssn = document.getElementById("f_ssn"); // social security
        var pWord = document.getElementById("f_password");// password

        validateField(uName);  //id = is the form input field ID
        validateField(email);
        validateField(pNum);
        validateField(ssn);
        validateField(pWord);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === "f_username"){
            var uNamePattern = /^[A-Z]+|^[A-Z]$/

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.
        }else if(inputName.name === "f_email"){
          var emailPattern = / ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$ /
        }else if(inputName.name === "f_phone"){
           var phonePattern = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/
        }else if (inputName.name === "f_ssn"){
           var ssnPattern =  /^\d{3}-\d{2}-\d{4}$/
        }else if(inputName.name === "f_password"){
          var pwrdPattern = /^[a-zA-Z]\w{3,14}$ /
        }

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper


