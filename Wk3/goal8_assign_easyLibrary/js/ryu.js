/*
	PWA1: Goal8:  Simple Library
*/

var YOURLIBNAME = function(){

    return new YOURLIBNAME.prototype.init();

};

YOURLIBNAME.prototype = {

    init: function(){},

    elements: []

}; // end prototype


var Construct = function (parm){

};

Construct.prototype=  {
    init: function (parm){
},
    each: function(e){
      for(i=0,j=elements.length;i<j;i++){
          console.log(this.elements)

      }
        document.querySelectorAll("a").onclick=Construct.prototype.each(e);
        this.style.backgroundColor = 'gray';
        e.preventDefault()
        return false;
    }

    //this.elements
}


YOURLIBNAME.prototype.init.prototype = YOURLIBNAME.prototype;