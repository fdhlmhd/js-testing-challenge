function isPrime(number) {
    if (number < 2) 
        return false
    for (let y= 2; y < number; y++) {
        if (number % y === 0)
        return false
    }
    return true
}

module.exports = isPrime;