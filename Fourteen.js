let check = "A";
let vowel =['a', 'e', 'i', 'o', 'u'];
for(let i = 0; i < vowel.length; i++) {
  if(check.toLowerCase() === vowel[i].toString()) {
    console.log(check + " is a vowel.");
    break;
  } else if(i === vowel.length - 1) {
    console.log(check + " is not a vowel.");
  }
}