
function printInt(n){
    for(var i=1;i<=n;i++){
        console.log(i);

    }
}

// printInt(18);

function printIntRev(n){
     for(var x=n;x>=1;x--){
        console.log(x);
     }
}

//     printIntRev(5)


// Question 3
// function checkInput(x) {
//     var x = 5;
    
//     if (x > -1) {
//       console.log(checkInput(x))("x is greater than -1 returns number");
//     } else {
//       console.log(checkInput(x))("x is less than or equal to -1 we return -1");
//     } 


//     var x = 'hello';
    
//     if (x > -1) {
//         console.log(checkInput(x))("x is greater than -1 returns number");
//       } else {
//         console.log(checkInput(x))("x is less than or equal to -1 we return -1");
//       } 

//       var x = '5'

//       if (x > -1) {
//         console.log(checkInput(x))("x is greater than -1 returns number");
//       } else {
//         console.log(checkInput(x))("x is less than or equal to -1 we return -1");
//       } 

//       var x = true

//       if (x > -1) {
//         console.log(checkInput(x))("x is greater than -1 returns number");
//       } else {
//         console.log(checkInput(x))("x is less than or equal to -1 we return -1");
//       } 

//       var x = ([1,2,3,4])

//       if (x > -1) {
//         console.log(checkInput(x))("x is greater than -1 returns number");
//       } else {
//         console.log(checkInput(x))("x is less than or equal to -1 we return -1");
//       } 

// }

// console.log(checkInput("null"));


// question 4
function simpleEvenAdding(num){
    var solution = 0;
    for (var x = 0; x <= num; x++){ 
        if(x % 2 === 0){
            solution += x; // solution = solution + x
        }
    }
    return solution;
}

console.log(simpleEvenAdding(0))
