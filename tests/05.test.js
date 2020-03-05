const isPrime = require('../src/05')

test('test soal no 05', () => {
    expect(isPrime(8)).toEqual(false)
    expect(isPrime(5)).toEqual(true)
})