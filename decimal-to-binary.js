function decimalToBinary(number){
    var result = [];
    while(number > 0){
        rem = number % 2;
        result.unshift(rem);
        number = parseInt(number/2);
    }
    return result.join('');

}


console.log(decimalToBinary(125));