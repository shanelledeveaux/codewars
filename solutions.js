// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// removeVowels('This is the coolest ever!');

// ??
// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];

//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }

// disemvowel("Hello Josh");

// function toJadenCase(str){
//   var toJadenCase = str.split(' ');

//   for (i=0; i<toJadenCase.length; i++){

//      toJadenCase[i] = toJadenCase[i].charAt(0).toUpperCase() + toJadenCase[i].slice(1)

//   }
//   var jadenRocks = toJadenCase.join(' ')
//   return jadenRocks;
// }

// toJadenCase("How can mirrors be real if our eyes aren't real")

// function filter_list(l) {
//   var filterarr = [];
//   for (i=0; i<l.length; i++){
//     console.log(l[i])
//     if(typeof(l[i]) == "number"){
//       filterarr.push(l[i])
//     }
//   }
//   return filterarr;
// }

// filter_list([1,2,'a','b'])

// function XO(str) {
//     var ex = str.toUpperCase().split('')
//     var countX =0;
//     var countY =0;
//     for (i=0; i<ex.length; i++){
//       console.log(ex[i]);
//       if( ex[i] === 'X'){
//         countX++
//       } else if (ex[i] === 'O') {
//         countY++
//       // } else if (ex[i] != 'X' || ex[i] !='O'){
//       //   return true;
//       }
//     }
//     if (countX === countY){
//       return true
//     } else {
//       return false
//     }
// }

// XO("zzoo")

// var isSquare = function(n){
//   var square = Math.sqrt(n);
//   if (square * ){
//   return square;
//   }
// }

// var isSquare = function(n){
//   var square = Math.sqrt(n);
//   if(square === Math.floor(square)){
//   return true;
//   } else {
//   return false;
//   }
// }

// isSquare(25);

// function highAndLow(numbers){
//   var numsarr = numbers.split(' ');
//   return Math.max.apply(null, numsarr) + ' ' + Math.min.apply(null, numsarr);
// }
// highAndLow("1 9 3 4 -5");

// function squareDigits(num){
//   var sqrArr = []
//   var num = num.toString().split('');
//   for(i=0;i<num.length;i++){
//     var numSquare = num[i]*num[i];
//     // return numSquare.join('');
//     sqrArr.push(numSquare);
//   }
//   var sqrArr = sqrArr.join('')
//   return parseInt(sqrArr);
// }

// squareDigits(9119)

// function accum(s) {
//   var loop = []
// 	var accumulate = s.split('');
//   for (i=0;i<s.length; i++){
//     var accumulate = s[i].repeat(i+1);
//     var upper = accumulate.charAt(0).toUpperCase() + accumulate.slice(1).toLowerCase()
//     loop.push(upper);
//   }
//   return loop.join('-');
// }

// accum("aBcd");

// function findShort(s){
//   var split = s.split(' ');
//   var lengths = []
//   for (i=0; i<split.length; i++){
//     var word = split[i].length;
//     lengths.push(parseInt(word));
//   }
//   return Math.min(...lengths);
// }

// function findShort(s){
//   return Math.min(...s.split(' ').map(s=> s.length));
// }

// findShort('bitcoin take over the world maybe who knows perhaps')

// function DNAStrand(dna){
//   opposite = '';
//   for (i=0;i<dna.length; i++){
//     console.log(dna[i]);
//     switch(dna[i]){
//       case 'A':
//       opposite += 'T';
//       break;
//       case 'T':
//       opposite +='A';
//       break;
//       case 'C':
//       opposite +='G';
//       break;
//       case 'G':
//       opposite += 'C'
//     }
//   }
//   return opposite;
// }

// DNAStrand ("ATTGC")

// function sumTwoSmallestNumbers(numbers) {
//   var numbers= numbers.sort(function(a, b){return a-b})
//   return numbers[0]+numbers[1];
// };

// sumTwoSmallestNumbers([15, 28, 4, 2, 43])

// function validatePIN (pin) {
//   if (pin.length === 4 || pin.length === 6 && typeof pin === 'string' && /0-9/){
//     return true;
//   } else {
//     return false;
//   }
// }

// validatePIN('3[42')

// function findOdd(A) {
//   var count = 0;
//   var odd = 0;
//   for (i=0;i<A.length; i++){
//     if (A[i]%2===1){
//       odd = A[i];
//     }
//   }
//   return odd;
// }

// findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);

// var favNum = 7;
// var trueFavNum = 7;
// trueFavNum === favNum;

// function solution(number) {
//     var sum = 0;
//     for (var i = 1; i < number; i++) {
//       console.log(i)
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }

//   solution(10);

// function firstReverseTry(arr) {
//     var first = arr[0];
//     var last = arr[arr.length - 1];

//   if (arr.length){
//     arr.splice(0, 1, last);
//     arr.splice(arr.length -1, 1,first);
//   } else {
//     arr = []
//   }
//     return arr;
//   }

//   firstReverseTry([])

function inAscOrder(arr) {
  for (i = 1; i < arr.length; i++) {
    prevNum = arr[i - 1];
    console.log(prevNum);
    if (arr[i] < prevNum) {
      return false;
    }
  }
  return true;
}

inAscOrder([1, 6, 10, 18, 2, 4, 20]);
inAscOrder([1, 2, 3, 4, 5]);

function superSize(num) {
  return parseInt(
    (num + "")
      .split("")
      .sort(function(a, b) {
        return b - a;
      })
      .join("")
  );
}

superSize(123456);

function fizzbuzz(n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

fizzbuzz(20);
