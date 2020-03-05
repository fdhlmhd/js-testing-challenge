const isLeapYear = require('../src/04')

test('test soal no 04', () => {
    expect(isLeapYear(2004)).toEqual(true)
    expect(isLeapYear(2005)).toEqual(false)
})