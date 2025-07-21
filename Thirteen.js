let n = 5; 
let a = 0;
let b = 1;

console.log("Fibonacci Series:");
for (let i = 0; i < n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}
