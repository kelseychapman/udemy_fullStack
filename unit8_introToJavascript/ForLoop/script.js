var str = "hello";
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//for every number that is <16 add 8
for (var i = 0; i < 16; i += 8) {
    console.log(i);
}


// start at index 1, and add 2 until you get to the end. every other character
var str = "hello";
for (var i = 1; i < str.length; i += 2) {
    console.log(str[i]);
}


for (var i = -10; i < 20; i++) {
    console.log(i);
}

for (var i = 10; i <= 40; i += 2) {
    console.log(i);
}

for (var i = 10; i <= 40; i += 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (var i = 301; i < 333; i += 2) {
    console.log(i);
}

for (var i = 301; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (var i = 5; i <= 50; i++) {
  if(i %5 ===0 && i %3 ===0){
    console.log(i);
  }
}
