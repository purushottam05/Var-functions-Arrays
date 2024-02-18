//higher order functions

// function executeOperation(operation, a, b) {
//     return operation(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// console.log(executeOperation(add, 2, 3));      
// console.log(executeOperation(multiply, 2, 3)); 



// function greet(language) {
//     if (language === 'english') {
//         return function(name) {
//             console.log(`Hello, ${name}!`);
//         };
//     } else if (language === 'spanish') {
//         return function(name) {
//             console.log(`¡Hola, ${name}!`);
//         };
//     } else {
//         return function(name) {
//             console.log(`Language not supported for greeting, ${name}!`);
//         };
//     }
// }

// const englishGreet = greet('english');
// englishGreet('John');  

// const spanishGreet = greet('spanish');
// spanishGreet('Juan');

// const invalidGreet = greet('invalid');
// invalidGreet('Juan');



//arrow functions 
// function Person() {
//     this.age = 0;

//     setInterval(() => {
       
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }

// const person = new Person();



//closures -> f/n with reference to its outer environment

function x() {
    var a =7 ;

    function y() {
        console.log(a);
    }
    y();
}
x();
  








