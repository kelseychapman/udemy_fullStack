function sayHi(){
  console.log("hello");
  console.log("goodbye");
} sayHi();

function singSong(){
  console.log("twinkle");
  console.log("twinkle");
  console.log("littlestar");
} singSong();

function sayHello(name){
  console.log("hello there, " + name + "!");
} sayHello("kelsey");

function area (length, width){
  console.log(length * width);
} area (2,3);

function great(person1, person2, person3){
  console.log("hi "+ person1);
  console.log("hi "+ person2);
  console.log("hi "+ person3);
} great("harry", "ron", "kelsey");


function checkCreds(email, password){
  console.log("name: " + email);
  console.log("password: " + password);

} checkCreds("rusty", "woof")


//return vs console.log
// function square (x){
//   console.log(x*x);
// } square(4);

// function square(x){
//   return x * x;
// } "4 squared is: " + square(4);

function cap(str){
  return.charAt(0).toUpperCase() + str.slice(1);
}
var city ="paris";
var cap = capCity(city);

function capitalize(str){
  if(typeof str === "number"){
    return "that is not a string"
  }
}
