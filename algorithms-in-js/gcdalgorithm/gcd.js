var calculateGCD = function(a,b){
    if(b===0)
      return a

    return calculateGCD(b, a % b)
}

console.log(calculateGCD(14,5))
