
// function statement aka function declaration
function a()  {
    console.log("function statement");
}


//function expression

let b = function () {
    console.log("function exp");
}
a();
b();

//anonymous function -> shows syntax error, as functions needs to have an identifier or have a value 

// function () {

// }

// named function expression -> xyz should be called within the block and throws error of its outside 
// the block scope

var c = function xyz() {
    console.log("named fn exp");

} 
c();
xyz();

//params and args -->

let d = function (params1, params2 ) //-> parameters
{
    console.log("function exp");
}

d(2,4); //-> args

// first class functions --> the ability to use functions as values, passed as arguments





