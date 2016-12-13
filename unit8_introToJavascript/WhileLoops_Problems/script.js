console.log("printing # between -10 and 19");

var allNum = -10;
while (allNum < 20) {
    console.log(allNum);
    allNum++;
}

console.log("printing even # between 10 and 40");
var counter = 10;
while (counter <= 40) {
    if (counter % 2 === 0) {
        console.log(counter);
    }
    counter += 1;
}

var counter = 10;
while (counter <= 40) {
    console.log(counter);
    counter += 2;
}

//odd numbers between 300 and 333
var odd = 300;
while (odd <= 333){
  if(odd % 2 !== 0) {
    console.log(odd);
  } odd+=1;
}

//print all numbers divisible by 5 and 3 between 5 and 50
var divisible = 5;
while (divisible <= 50){
  if(divisible %5 === 0 && divisible %3 === 0) {
    console.log(divisible);
  } divisible+=1;
}
