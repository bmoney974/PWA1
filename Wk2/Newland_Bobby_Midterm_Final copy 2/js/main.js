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

    var thirdObj = function (newStudent){  // function to push new student into object array    // add data function

        students.push(newStudent);  // push method

    };
    var newKid =  {name:"Jim Jones",address:{street:"921 Lacey Lane",city:"Franklin",state:"KY"},gpa:[2.5,3.2,2.9],date: new Date()}; // new kid object
    thirdObj(newKid);  // call function
    /********************** First 2 students console logs  ***********************/

    console.log("*** Student 1 orig *** "+ students[0].name +"\n"+ students[0].address.street +" " +
        students[0].address.city+","+ students[0].address.state + "\n" + "GPA "+
        students[0].gpa + students[0].date);

    console.log("*** Student 2 orig *** "+students[1].name +"\n"+ students[1].address.street +" " +
        students[1].address.city+","+ students[1].address.state + "\n" + "GPA "+
        students[1].gpa + students[1].date);

    /**************************************************** Student Data Function ************************************************************************************/
    var sData = function (){     // function to display inner HTML  Global var #4
        t++;

        var name =  document.getElementsByTagName("div")[4];
        var address = document.getElementsByTagName("div")[5];
        var gpa = document.getElementsByTagName("div")[6];
        var avgGpa = document.getElementsByTagName("div")[8];
        var sDate = document.getElementsByTagName("div")[7];
        var btn = document.getElementsByTagName("div")[11];

        console.log("test ",t);

        var clickFix = function (){

            if(t !== students.length){
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

                name.innerHTML = "Name: "+ students[t].name;       // name display
                address.innerHTML = "Address: " + students[t].address.street + " "+ students[t].address.city + ", "  +
                    students[t].address.state;
                gpa.innerHTML = "GPA: "+ students[t].gpa;       // gpa display
                avgGpa.innerHTML = "Average GPA: " +  (Math.round(gpaAvg(students[t].gpa )*10)/10);
                sDate.innerHTML = "Date: "+ students[t].date;
            }else{
                btn.innerHTML = "Done";
                button.removeEventListener("click",sData,false);
            }
            /********************** All  students console logs  ***********************/
            var cLog1 = function (){
                console.log("***** Student"+ [t+1] +"*****"+"\n" + students[t].name +"\n"+ students[t].address.street +" " +
                    students[t].address.city+","+ students[t].address.state + "\n" + "GPA "+
                    students[t].gpa + students[t].date);
            };
            cLog1();


        };
            clickFix();



        /********************** Test console logs  ***********************/
        console.log("t is ",t);
        console.log("max -1 is ",students.length-1);
        //console.log(innerHTML());
    }; // sData end function


    button.addEventListener("click",sData,false);   // button event listener

})();