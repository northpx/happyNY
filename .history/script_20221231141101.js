
//thong dich
//quote
// ??
//use strict
//
//biginteger
//conversion(number, bool)
var i = 0;
var txt = 'happynew year';
var speed = 50; 
(function typewriter() {
    if(i < txt.length){
        document.getElementById("demo").innerHTML +=txt.charAt(i);
        i++;
        setTimeout(typewriter,speed);
    }   
})();