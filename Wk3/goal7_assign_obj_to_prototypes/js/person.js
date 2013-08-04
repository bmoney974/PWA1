/**
 * Bobby Newland   08-01-13
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

window.Person = Person;
//(function(){



    var Person = function(name,action,job,row){



        this.name =name;
        this.action =action;
        this.job = job;
        this.row = row;


    };



    Person.jobs = ["Teacher","Student","Lunch Lady","Janitor","Bus Driver"];
    Person.action = ["Eating","Sleeping","Working","Studying","Playing"];





   console.log(Person.jobs);


//})();