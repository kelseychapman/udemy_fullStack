var num = 8; //declaring num to be 8

function doMath(){ //function runs after line 12
  num += 1; //
  if(num % 5 ==0){ //is num divisible by 5
    return true //yes, returns true
  } else {
    return false
  }
}

num += 1;  //runs before function. num is now 9 because they are in the same scope
doMath()
