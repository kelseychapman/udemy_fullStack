function sing(){
  console.log("twinkle twinkle");
  console.log("how i wonder");
} sing()

setInterval(sing, 1000); //setInterval is passing the value of sing
clearInterval(2);

setInterval(function()){  //setInerval is passing an annonymous function
  console.log("I am an annon function");
  console.log("this is awesome");
}, 2000);
