//-------------------------------------------------------------CLASS TASK - DAY2-----------------------------------------//

//1
// function SumOfTwoNum1(a,b){
//     return a+b
// }
// console.log(SumOfTwoNum1(2,3));

//2
// function MaxOfNum(a,b,c){
//     let max = Math.max(a,b,c); 
//     return max
// }
// console.log(MaxOfNum(20,3,25));


//3
// function SumOf3Dig(sum){
//      let last = Math.floor(sum%10);
//      let second = Math.floor(sum/10%10);
//      let first = Math.floor(sum/100);
//      return first+second+last
// }
// console.log(SumOf3Dig(179));


// //4
// function endNine(sum){
//     if (sum%10==9){
//         console.log("Yes") 
//     } else return console.log("No")
// }
// console.log(endNine(149));

//5) Year into century/fox
// function Fox(fox){
//     InteredFox = Math.floor((fox+100)/100);
//     return InteredFox;
// }
// console.log(Fox(90));

//6) Minutes to Seconds
// let MinToSec = function(min){
//     return min*60
// }
// console.log(MinToSec(5));
// console.log(MinToSec(3));
// console.log(MinToSec(2));

//7) Age into days
// let AgeToDays=(age)=>{
//     return age*365
// }
// console.log(AgeToDays(65));
// console.log(AgeToDays(0));
// console.log(AgeToDays(20));

//8) findPerimeter
// let findPerimeter = (a,b)=>{
//     let perimeter = 2*(a+b);
//     return perimeter;
// }
// console.log(findPerimeter(6,7));
// console.log(findPerimeter(20,10));
// console.log(findPerimeter(2,9));

//9) true/false
// let LessThan100=function(a,b){
//     if (a+b<100){
//         return "true";
//     }else {
//         return "false";
//     }
// } 
// console.log(LessThan100(22,15));
// console.log(LessThan100(83,34));
// console.log(LessThan100(3,77));


//10) addUp to Intered Number
// let addUp=(n)=>{
//     let cnt=0;
//     for (let i = 1; i <=n; i++) {
//         cnt+=i;
//     }
//     return cnt
// }
// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));


//11) the quantity of equal numbers
// let equal = (a, b, c) => {
//    let TheSame = 0;
//     if (a == b && a == c) {
//         TheSame+=3;
//     } else if(b == a && b == c){
//         TheSame+=3;
//     } else if(c == a && c == b){
//         TheSame+=3;
//     } else if(a==b) {
//         TheSame+=2;
//     } else if(a==c){
//         TheSame+=2;
//     } else if(b == a){
//         TheSame+=2;
//     } else if(b == c){
//         TheSame+=2;
//     } else if (c == a){
//         TheSame +=2;
//     } else if (c == b){
//         TheSame +=2;
//     } else {
//         TheSame+=0;
//     }
//     return TheSame
// }
// console.log(equal(3,3,3));
// console.log(equal(1,1,1));
// console.log(equal(1,4,3));

//12) isSymmetrical
// let isSymmetrical = (num) => {
//     let revNum= 0;
//     let directNum = num;
//     while (directNum > 0) {
//         let LastNum = directNum % 10;
//         revNum = revNum * 10 + LastNum;
//         directNum = Math.floor(directNum / 10); 
//     }
//     if (num == revNum){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isSymmetrical(7227));
// console.log(isSymmetrical(9939));
// console.log(isSymmetrical(44444444));

//13) Prime numbers

//1) quantity of Prime numbers
// let countPrimes = (num) => {
//     let count = 0;
//     for (let i = 2; i <= num; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countPrimes(10));

//2) Printing the prime numbers
// let isPrime = (num) => {
//     for (let i = 2; i <=num; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++){
//             if (i%j === 0) {
//                 isPrime = false;
//                 break;
//             } 
//         }
//          if  (isPrime) {
//                 console.log(i);
//             }    
//         }      
//     }
// isPrime(10);


//14) Power of number
// let PowNum = (x,n) =>{
//     let pow = Math.pow(x,n)
//     return pow
// }
// console.log(PowNum(2,10));
// console.log(PowNum(2.1, 3));
// console.log(PowNum(2,-2));


//-------------------------------------------------------------HOME TASK - DAY2-----------------------------------------//

//1) circuitPower
// let circuitPower = (a,b) =>{
//     return a*b;
// }
// console.log(circuitPower(230,10));
// console.log(circuitPower(110,3));
// console.log(circuitPower(480,20));


//2) 
// let divisibleByFive = (num) => {
//     if (num % 5 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(divisibleByFive(5));
// console.log(divisibleByFive(-55));
// console.log(divisibleByFive(37));


//3) isSameNumber
// let isSameNum = (a, b) => {
//     if (a === b){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isSameNum(4,8));
// console.log(isSameNum(2,2));
// console.log(isSameNum(10,10));


//4) longestTime btw h, m, s
// let longestTime = (h, m, s) => {
//     let hour= h * 3600;
//     let min = (m * 60);
//     let sec = s * 1;
//     if (hour > min && hour >sec) {
//         return hour / 3600;
//     } else if (min > hour && min > sec) {
//         return min/60;
//     } else {
//         return sec;
//     }
// }
// console.log(longestTime(1, 59, 3598));
// console.log(longestTime(2, 300, 1500));
// console.log(longestTime(15, 955, 59400));


//5) oneOddOneEven
// let oneOddOneEven = (num) => {
//     let first = Math.floor(num/10);
//     let second = num % 10;
//     if ( first % 2 != 0 && second % 2 == 0) {
//         return true;
//     } else if (first % 2 == 0 && second % 2 != 0) {
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(oneOddOneEven(12));
// console.log(oneOddOneEven(55));
// console.log(oneOddOneEven(22));


//6) Return negativeNumber
// let negativeNum = (num) =>{
//     return num*(-1);
// }
// console.log(negativeNum(8));
// console.log(negativeNum(20));
// console.log(negativeNum(6));