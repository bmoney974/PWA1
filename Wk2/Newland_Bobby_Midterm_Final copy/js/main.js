/*
	* Mid Terms for PWA-1
*/
(function(){       // self executing function
    /**************************************************** Global Variables  ****************************************************************************************/
    var button = document.getElementById("info_btn"); // next student button   Global var # 1
    console.log(button);  //button console log


    var students =[
        {name:"James Bond",address:{street:"123 Apple Street",city:"Atlanta ", state:"GA"},gpa:[2.5,2.9,3.9],date: new Date()},  // student 1 info
        {name:"Sally Sue",address:{street:"678 Davis Lane",city:"Nashville",state:"TN"},gpa:[2.5,3.7,3.6],date: new Date()}      // student 2 info
    ];





       var t = 0-1; // array length  Global Var # 3

    /********************** Add New Student ***********************/

    var thirdObj = function (newStudent){  // function to push new student into object array    // add data function

        students.push(newStudent);  // push method

    };
    var newKid =  {name:"Jim Jones",address:{street:"921 Lacey Lane",city:"Franklin",state:"KY"},gpa:[2.5,3.2,2.9],date: new Date()}; // new kid object
    thirdObj(newKid);  // call function

    /**************************************************** Student Data Function ************************************************************************************/
    var sData = function (){     // function to display inner HTML  Global var #4

        var countUp = function (){
            t++;
        }
         countUp();


        var name =  document.getElementsByTagName("div")[4];
        var address = document.getElementsByTagName("div")[5];
        var gpa = document.getElementsByTagName("div")[6];
        var avgGpa = document.getElementsByTagName("div")[8];
        var sDate = document.getElementsByTagName("div")[7];
        var btn = document.getElementsByTagName("div")[11];

        /********************** Calculate Student GPA ***********************/
        var studentGpa = students[t].gpa;  // function to calculate average GPA

        var gpaAvg = function(numb){

            var count = 0;   // how many times we go thru loop
            var total = 0;    // total of numbers

            for (var ii = 0, jj =students[t].gpa.length; ii < jj; ii++){
                count++;
                total = total + studentGpa[t];
            }
            return total/count;
        };
        console.log("****** Average GPA ******* "+"\n"+"The average GPA is " + Math.round(gpaAvg(studentGpa )*10)/10);


//        kidName = students[t].name;
//        kidStreet = students[t].street;
//        kidCity = students[t].address.city;
//        kidState = students[t].address.state;
//        kidGpa = students[t].gpa;

        if (i !== students.length ){
            name.innerHTML = "Name: "+ students[t].name;       // name display
            address.innerHTML = "Address: " + students[t].address.street + " "+ students[t].address.city + ", "  +
                students[t].address.state;
            gpa.innerHTML = "GPA: "+ students[t].gpa;       // gpa display
            avgGpa.innerHTML = "Average GPA: " +  (Math.round(gpaAvg(students[t].gpa )*10)/10);
            sDate.innerHTML = "Date: "+ students[t].date;
        }else{
            btn.innerHTML = "Done";
            button.removeEventListener("click",sData,false);
        } // end conditional

        /********************** For Loop ***********************/
//
        for (var i = 0,max = students.length; i < max; i++){
//
//
//
//            /********************** Student Data ***********************/
//            kidName = students[t].name;
//            kidStreet = students[t].street;
//            kidCity = students[t].address.city;
//            kidState = students[t].address.state;
//            kidGpa = students[t].gpa;
//
//            if (t !== students.length ){
//            name.innerHTML = "Name: "+ students[t].name;       // name display
//            address.innerHTML = "Address: " + students[i].address.street + " "+ students[t].address.city + ", "  +
//            students[t].address.state;
//            gpa.innerHTML = "GPA: "+ students[t].gpa;       // gpa display
//            avgGpa.innerHTML = "Average GPA: " +  (Math.round(gpaAvg(students[t].gpa )*10)/10);
//            sDate.innerHTML = "Date: "+ students[t].date;
//            }else{
//                btn.innerHTML = "Done";
//                button.removeEventListener("click",sData,false);
            } // end conditional
             console.log("t is ",t);
            console.log("max is ",students.length);
//
//        }  // end loop

        var cLog2 = function (){
            console.log("***** Student"+ [t+1] +"*****"+"\n" + students[t].name +"\n"+ students[t].address.street +" " +
                students[t].address.city+","+ students[t].address.state + "\n" + "GPA "+
                students[t].gpa + students[t].date);
        }
          cLog2();

          }; // end function

    button.addEventListener("click",sData,false);   // button event listener

})();