//question1
function printInt(n){
    for(var i=1;i<=n;i++){
        console.log(i);

    }
}

// printInt(18);

// question 2
function printIntRev(n){
     for(var x=n;x>=1;x--){
        console.log(x);
     }
}

//     printIntRev(5)

//question 3
function checkInput(x){
if (typeof x === "number" || typeof x === "string" || typeof x === "boolean"){
    return typeof x;
}  else {
    return -1;
}
}   

//console.log(checkInput(123));
// console.log(checkInput("123"));
// console.log(checkInput(false));
// console.log(checkInput([132,122,222]));





// question 4
function simpleEvenAdding(num){
    var solution = 0;
    for (var x = 1; x<=num;x++){ 
        
        if(x % 2 === 0){
    
            solution += x; // solution = solution + x
        }
    }
    return solution;
}

//console.log(simpleEvenAdding(11))



// question 5
function letterCapitalize(str){
    var word = str. split("");

    var solution = "";

   for (var i=0;i<word.length;i++){
   var upperword = works[i].replace(wors[i][0], words[i][0].toUpperCase());
   solution += " " + upperword;

   }
 
   return solution.slice(1);
}
console.log(letterCapitalize("hello world"))

// qust 6 

function simpleReverse(str) {
    // Step 1. Use the split() method to return a new array
    var strArray = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var revArray = strArray.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    return revArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    
}
 // console.log(simpleReverse("Good Morning"));


//QUEST7
function findDiff(arr){

    var max = Math.max(... arr);

    var min = Math.min(... arr);

    return max - min;
}
//console.log(findDiff([1,2,3,4,5,10,2]));


// quest8
function timeConvert(num) {
 
    var hour = parsInt(num/60)

    var minutes  = num % 60

    return hour + ":" +  minutes 
}
//console.log(timeConvert(123));
//console.log(timeConvert(59));

//qust9

function findStr(str, long){
    var splitedArray = long.split(str);
    return splitedArray.length - 1;
}
//quest10
function selfDividingNumbers(left,right){
    var solution = [];
    for (var i=left;i<=right;i++){
        if(isSelfDividing(i)){
            solution.push(i)
        }
    }

      return solution;
}

function isSelfDividing(num){
    var digits = num.toString().split("");

    for(var X=0;x<digits.length;x++){
        if(num % digits[i] !== 0){
        return false;
        }
    
    }
    return true;
}
console.log(isSelfDividingNumbers(1,22))

//quest11

function moveZeros(num){
// counting zeros
    var counter = 0;
    // store solution
    var  solution = [];

    for(x=0;x<selfDividingNumbers.length;x++){
        if(nums[x] === 0){
            counter++;
        } else {
            solution.push(nums[x]);
        }
    }

    for(var j=counter;j>0;j--){
        solution.push(0);
     }
     return solution;


    }
console.log(moveZeros([1,0,21,4,0,0,4]))

//quest11

function average(num){
    if (nums.length === 0){
        return 0;
    }



    var sum = 0;

    for(var x=0;x<num.length;x++){
        sum += nums[x];
    }
  

    return sum / nums.length
     
}

console.log(average([1,2,5,3,1,]));