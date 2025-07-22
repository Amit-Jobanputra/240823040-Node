let pnumber = 6;
let divsion  =1;
for(let i =2;i<=pnumber/2;i++){
    if(pnumber%i==0){
        divsion+=i;
    }
}
console.log(divsion);
if(divsion===pnumber){
    console.log(pnumber + " is a perfect number.");
} else {
    console.log(pnumber + " is not a perfect number.");
}