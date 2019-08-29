function fizzBuzz(M, N){
    let result = [];
    for(let i=M; i<= N; i++){
        if(i %3===0 && i %5===0){
            result.push('FizzBuzz');
        }
        else if(i %3===0){
            result.push('Fizz');
        }
        else if(i%5===0){
            result.push('Buzz');
        }else {
            result.push(i);
        }
        
    }
    return result;
}

let res = fizzBuzz(1,15);
console.log(res);