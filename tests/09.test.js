const symetrical = require('../src/09')

test('test soal no 09', () => {
    expect(symetrical('malam')).toEqual(true)
    expect(symetrical('taat')).toEqual(true)
    expect(symetrical('tidur')).toEqual(false)
    expect(symetrical(1234)).toEqual(false)
    expect(symetrical(108801)).toEqual(true)
    expect(symetrical(8001008)).toEqual(true)
})