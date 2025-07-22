let a = 36;
let b = 48;
let gcd;
if(a===0){
    gcd =b;
}
else if(b=== 0){
    gcd=a;
}
else{
    while(a!==b){
        if(a>b){
            a-=b;
        }
        else{
            b-=a;
        }
    }
    gcd =a; 
}
console.log("GCD is :-"+gcd)