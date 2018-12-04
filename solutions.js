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

function removeSmallest(numbers) {
  var newArr = numbers.slice();
  var smallestNum = Math.min.apply(null, newArr);
  newArr.splice(newArr.indexOf(smallestNum), 1);
  return newArr;
}

removeSmallest([2, 3, 4, 5]);

function rakeGarden(garden) {
  var rakedGarden = garden.split(" ");
  console.log(rakedGarden.length);
  for (var i = 0; i < rakedGarden.length; i++) {
    if (rakedGarden[i] != "rock" && "gravel") {
      rakedGarden[i] = "gravel";
    }
  }
  return rakedGarden.join(" ");
}

function swap(tempArr, i, j) {
  var temp = tempArr[i];
  tempArr[i] = tempArr[j];
  tempArr[j] = temp;
}

function bubblesortOnce(array) {
  var tempArr = array;
  for (var i = 0; i < 1; i++) {
    for (var j = 1; j < tempArr.length; j++) {
      if (tempArr[j - 1] > tempArr[j]) {
        swap(tempArr, j - 1, j);
      }
    }
  }
  return tempArr;
}

bubblesortOnce([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);

function pigIt(str) {
  var pig = str.split(" ");
  for (i = 0; i < pig.length; i++) {
    if (pig[i] == "!" || pig[i] == "?") {
      pig[i];
    } else {
      var firstLetter = pig[i].charAt(0);
      pig[i] = pig[i].substr(1).concat(firstLetter + "ay");
    }
  }
  return pig.join(" ");
}

function countDevelopers(list) {
  var finalList = list
    .filter(devs => devs.language == "JavaScript")
    .filter(jsDevs => jsDevs.continent == "Europe");
  return finalList.length;
}

function songDecoder(song) {
  return song
    .replace(/WUB/g, " ")
    .split(" ")
    .filter(str => str != "")
    .join(" ");
}

function cakes(recipe, available) {
  if (Object.keys(available).length === 0) return 0;
  var portions = [];
  for (var property in recipe) {
    for (var property2 in available) {
      if (available.hasOwnProperty(property) == true && property == property2) {
        let amount = available[property2] / recipe[property];
        portions.push(amount);
      } else if (available.hasOwnProperty(property) == false) {
        return 0;
      }
    }
  }
  var smallest = Math.floor(Math.min.apply(null, portions));
  return smallest;
}

function duplicateCount(text) {
  var text = text.toLowerCase().split("");
  let duplicates = [];

  for (i = 0; i < text.length; i++) {
    if (
      text
        .join("")
        .slice(1)
        .includes(text[0])
    ) {
      duplicates.push(text[0]);
      text = text.filter(letter => letter !== text[0]);
      i = 0;
    } else {
      text = text.filter(letter => letter !== text[0]);
      i = 0;
    }
  }
  return duplicates.length;
}

duplicateCount("Indivisibilities");

function generateMenu(menuItems) {
  var outputString = "";
  for (var i = 0; i < menuItems.length; i++) {
    var anchorString =
      '<a href="' + menuItems[i].url + '">' + menuItems[i].text + "</a>";
    outputString += anchorString;
  }
  return outputString;
}

generateMenu(inputs.slice(0, 1));

function iccanobif(n) {
  var arr = [1, 1];

  if (n === 1) return [1];

  for (let i = 0; i < n - 2; i++) {
    var num = arr[i] + arr[i + 1];
    arr.push(num);
  }
  return arr.reverse();
}

iccanobif(9);

function selReverse(array, length) {
  var smlArr = [];
  var final = [];

  if (length === 0) return array;

  while (array.length) {
    smlArr.push(array.splice(0, length));
  }
  smlArr.map(function(e, i) {
    e.reverse();
    final.push(...e);
  });

  return final;
}
