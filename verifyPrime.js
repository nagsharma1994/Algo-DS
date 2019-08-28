function isPrime(number){
    let flag = true;
    for(let i=2; i < Math.sqrt(number);i++){
        if(number % i === 0 ){
            flag = false;
        }
    }
    if(flag){
        console.log("number is prime")
    }
    else{
        console.log("number is not prime")
    }
   
}

isPrime(15);