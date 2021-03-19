function sumFibonnaci(num) {
    if (num ==1){
        return 1;
      }
    
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }

  console.log(sumFibonnaci(1));
  console.log(sumFibonnaci(10));
  console.log(sumFibonnaci(20));
  console.log(sumFibonnaci(4));
  console.log(sumFibonnaci(-5));
  module.exports = sumFibonnaci;