let num = 1234;
let reversed = 0;

for (; num > 0; num = (num / 10) | 0) {
  let digit = num % 10;                  // get last digit
  reversed = reversed * 10 + digit;     // build reversed number
}

console.log(reversed); // Output: 4321
