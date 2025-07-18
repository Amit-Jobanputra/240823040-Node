let prime =29;
let isprime = true;

if(prime <=1){
    isprime=false;
}
else{
    for(let i =2 ; i <prime/2;i++){
        if(prime % i === 0){
            isprime = false;
            break;
        }
    }
}
if(isprime){
    console.log("Yes Number is Prime Number :-"+prime);
}
else{
    console.log("No Number is not Prime Number :-"+prime);
}