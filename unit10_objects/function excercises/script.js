//#1: is Even
function isEven(num) {
    //return tue if even
    if (num % 2 === 0) {
        return true;
    }
    //return false otherwise
    else {
        return false;
    }
}

//#1 refactored
// function isEven(num){
//   //return tue if even
//   return num %2 === 0;
//   }
// }


//Problem #2: factorial
function factorial(num) {
    var result = 1; //define result variable
    for (var i = 2; i < num; i++){//calculate factorial and store value in result
        result *= i; //refactored above line
    }
    //return result
    return result;
}
factorial(5); // 5 x 4 x 3 x 2 x 1


//Problem #3: change case
function kebabToSnake(str) {
var result = "";
//replace "-" with "_"
var newString = str.replace(/-/g, "_") //'/-/g' is the pattern at which it will replace. "" is what we are replacing
return newStr
//return str
}
kebabToSnake("hello-world");


function repeat(arr){
  if(arr.length === 0){
    return arr;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] )
    }
  } return
}
