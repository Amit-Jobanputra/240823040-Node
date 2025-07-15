let f=4;
let a=1;
if(f<0){
    console.log("You Enter Nagetive Number ");
}
else if(f===0){
    console.log("Factorial Number of Zero is 1");
}
else{
    for(let i = 1;i<=f;i++){
        a*=i;
    }
    console.log(`The Factorial Number of ${f} is ${a}`);
}