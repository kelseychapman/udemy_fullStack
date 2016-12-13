var count = 1;
while(count< 6){
  console.log("count is:" + count);
  count ++
}

//start at 5. if less than or equal to 25, print log and increment count value up by one.
var count = 5;
while(count<= 25){
  console.log("count is:" + count);
  count ++
}


//loop through string to print out every character seperatly

//strng we are looping over
var str="hello";
//first character is at index 0
var count = 0;
while(count< str.length){ //while cont is less than 5
  console.log(str[count]); //log string sub count ("h")
  count ++; //add one to count, move to "e"
}

//this loop gives all odd numbers. while num is <= to 10, incrememnt num by 2.
var num = 1;
while (num <= 10){
  console.log(num);
  num += 2;
}

//print out all multiples of 4, between 1 and 20
var num = 1
while (num <= 20){
  if(num %4 === 0){ //if is checking if num is a multiple of 4, if it does print it out.
    console.log(num);
  }
  num++
}
