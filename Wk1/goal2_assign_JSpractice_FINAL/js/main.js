// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");



        // Exercise 1
          var arr = [1,3,4,5,6,7,8,9];
          var numbers = arr;
    var numAvg = function(numb){
        var count = 0;   // how many times we go thru loop
        var total = 0;    // total of numbers

        for (var i = 0, j = numb.length; i < j; i++){
            count++;
            total = total + arr[i];
        };
        return total/count;
    };
    console.log("The average is " + numAvg(arr));



    //--------------------------------------------------------
    console.log("2. concat first and last name");
// Exercise 2


    var firstName = ("Bobby");
    var lastName = (" Newland");
    var loggedIn = true;

    var fullName = function(name1,name2){

        if(loggedIn = true){
         var wholeName =   name1.concat(name2);
            res2 =  wholeName;
        }
        return res2
    };
        fullName(firstName,lastName);
        var name = fullName(firstName,lastName);
                console.log("My name is ",name);
    //--------------------------------------------------------
    console.log("3. word count");
    var str = ("This is a long string of words");
   var strCount = str.split(" ");


    var wordTotal = function (words){
        if(str.split > 6); {
            var wordCount = words.length;
            result =  wordCount;

        }
        return result
    };
    wordTotal(strCount);
  var wrdCount = wordTotal(strCount);
   console.log("The number of words in the string is ",wrdCount);


    //--------------------------------------------------------
    console.log("4. sentence char count");
    var str1 = ("This is a long sting of words");
    var carCount = str1.split("");


    var charCount = function(letters){
        if(carCount > 0);{
            var letterCount = letters.length;

            result1 =  letterCount;
        }
        return result1
    };

    charCount(carCount);
    var letterAmount = charCount(carCount);
    console.log("The number of letters in the string are ",letterAmount);
    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    var str2 = ("cat");
    var vowelSnatch = str2.charAt(1);



    var vowelsInWord = function(vowel){
        if(arr >0 );{
            var arry = [];
            var arr = arry.push(vowel);

            result3 =  arr;

        }
        return result3
    };

    vowelsInWord(arr);
  var  inWord = vowelsInWord(arr);
    console.log("The number of vowels in the string are ",inWord);
    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

    var numArr = [1,3,2,4];
    var numArr2 =[1,2,3,4];
    var on = false;
    var off = true;

    var findNum = function(pram1,pram2){
        if(on=false);{
           var oddNum =  numArr.splice(0,2);
           var evenNum =  numArr2.splice(1,3);
            result4 = oddNum;
            result5 = evenNum;
        }
        return result4;
           return result5;
    };
   var tally = findNum(numArr,on);
    var tally2 =findNum(numArr2,on);
    console.log("The odd numbers are ", tally );
    console.log("The even numbers are ", tally2 );

    // had a lot of trouble with this one :-(
})();