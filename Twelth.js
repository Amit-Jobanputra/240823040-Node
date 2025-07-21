let number = 153; // You can change this to test other numbers
let temp = number;
let sum = 0;

// Count number of digits
let count = 0;
let tempCount = number;
while (tempCount > 0) {
  tempCount = Math.floor(tempCount / 10);
  count++;
}
while (temp > 0) {
  let digit = temp % 10;
  let power = 1;
  for (let i = 0; i < count; i++) {
    power *= digit;
  }
  sum += power;
  temp = Math.floor(temp / 10);
}


if (sum === number) {
  console.log(number + " is an Armstrong Number.");
} else {
  console.log(number + " is NOT an Armstrong Number.");
}
