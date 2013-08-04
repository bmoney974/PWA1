/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function (){
    window.Person = Person;


    var row1= document.getElementById("row1");         // row 1
    var row2 = document.getElementById("row2");        // row 2
    var row3 = document.getElementById("row3");        // row 3




    var r1C1 = document.getElementById("r1c1");   // rows and columns  1
    var r1C2 = document.getElementById("r1c2");
    var r1C3 = document.getElementById("r1c3");

    var r2C1 = document.getElementById("r2c1");  // row and columns 2
    var r2C2 = document.getElementById("r2c2");
    var r2C3 = document.getElementById("r2c3");

    var r3C1 = document.getElementById("r3c1");  // row and columns 3
    var r3C2 = document.getElementById("r3c2");
    var r3C3 = document.getElementById("r3c3");

    var rowArr = [row1,row2,row3];

     var people=[];

   // var Person ={people:[]};
    var names = ["John","James","Sally","Sue","Beth"]; // names array
    var act =["Eating","Sleeping","Working","Studying","Playing"];
    var gig =["Teacher","Student","Lunch Lady","Janitor","Bus Driver"];
    var top = names.length -1 ;
    var t= Math.round((Math.random()*top));
    var u= Math.round((Math.random()*top));
    var v= Math.round((Math.random()*top));

//    while(names === names ){
//        Math.round((Math.random()*top));
//    }


    for(var i= 0, max = names.length; i < max; i++){
        var person = [new Person(names[t],act[t],gig[t],rowArr[1])];

    };

//    r1C3.innerHTML = act[t];
//    r2C3.innerHTML = act[u];
//    r3C3.innerHTML = act[v]

;

    people.push(person);



    var populateHTML = function(){

      r1C1.innerHTML = names[t];
      r1C2.innerHTML = gig[t];
        r2C1.innerHTML = names[u];
        r2C2.innerHTML = gig[u];
        r3C1.innerHTML = names[v];
        r3C2.innerHTML = gig[v];

      r1C3.innerHTML =act[t];


    };
//    while(names[t]===names[v]){
//        Math.round((Math.random()*top));
//    }
//

    var showAct = function (){
        r1C3.innerHTML = act[t];
        r2C3.innerHTML = act[v];
        r3C3.innerHTML = act[u];

    }
    showAct();

    var runUpdate = function(){
        r1C3.innerHTML = act[t];
        r2C3.innerHTML = act[u];
        r3C3.innerHTML = act[v];

    };
    setInterval(runUpdate, 1000 / 100);

//    var nolike = function (){
//        if(names[] === names[]){
//
//        }
//    };

    Person.prototype.update= runUpdate();

    populateHTML();

  // console.log("names are ",Person.people);
    console.log(people);
    console.log("a random number 1 is ",t);
    console.log("a random number 2 is ",u);
    console.log("a random number 3 is ",v);
    //console.log(populateHTML());
    console.log(person);
    console.log(this.name);
   console.log(runUpdate());

})();