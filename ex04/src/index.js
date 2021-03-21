function sumFibonacci(num) {
  if (num == 1) {
    return 1;
  }
  var br1 = 0;
  var br2 = 1;
  var zbir = 0;
  while (br2 <= num) {
    if (br2 % 2 !== 0) {
      zbir += br2;
    }
    br2 += br1;
    br1 = br2 - br1;
  }
  return zbir;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;