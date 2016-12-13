
//if else only loops through once
// var answer = prompt("Are we there yet?");
// if(answer === "yes"){
//   alert("Yay we made it")
// } else {
//   var answer = prompt("are we there yet")
// }



//while loops through until you get the answer no.
// var answer = prompt("Are we there yet?");
//
// while(answer !== "yes" && answer !== "yeah"){
//   var answer = prompt("are we there yet")
// }
// alert("We made it");



//indexOf
var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1){ //yes does not exist in our answer
  var answer = prompt("are we there yet")
}
alert("We made it");
