function solution (roman) {
    var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    var numbers = roman.split('');
    var sum = 0, i;
    for(i = 0; i < numbers.length; i++) {
      if (data[numbers[i]] < data[numbers[i+1]]) {
        sum += data[numbers[i+1]] - data[numbers[i]];
        i++;
      } else {
        sum += data[numbers[i]];
      }
    }
    return sum;
  }

  // для изучения добавлю решения других участников, решения открываются после прохождения задачи

  function solution1(roman){
    var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
 }

 function solution2(roman) {
    var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
  }

  function solution3(roman){
    var rom ={ "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    return roman.split('').reverse().reduce(
        function(dec,c,i,rr){ 
            c=rom[c];
            i=rom[rr[i-1]]||0; 
            return dec + (i<=c? c: -c) }
        ,0
    )
}

function solution4(roman){
    var romanNumerals = {
      'M': 1000,
      'D': 500,
      'C': 100,
      'L': 50,
      'X': 10,
      'V': 5,
      'I': 1
    };
    
    var numericValue = 0;
    
    for (var i = 0; i < roman.length; i++) {
      if (i+1 < roman.length) {
        if (romanNumerals[roman[i]] < romanNumerals[roman[i+1]]) {
          numericValue += (romanNumerals[roman[i+1]] - romanNumerals[roman[i]]);
          i++;
        } else {
          numericValue += romanNumerals[roman[i]];
        }
      } else {
        numericValue += romanNumerals[roman[i]];
      }
    }
    return numericValue;
  }

  function solution5(roman){
    var numerize = {
      "I":1,
      "V":5,
      "X":10,
      "L":50,
      "C":100,
      "D":500,
      "M":1000
      },
      lastBiggest = 0;
    return roman.split("").reduceRight((res,el)=>{
      var num = numerize[el];
      if (num>=lastBiggest) {
        lastBiggest = num;
      } else {
        num*=-1;
      }
      return res+num;
    },0);
  }

  function solution6(roman){

    let romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    
    return roman.split('')
                .reduce((acc, cur, i, arr) => {
                  return (i !== arr.length-1 && romanMap[cur] < romanMap[arr[i+1]])
                    ? acc - romanMap[cur]
                    : acc + romanMap[cur]
                }, 0)
  }