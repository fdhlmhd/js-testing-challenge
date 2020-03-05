const roma = require('../src/15')

test('test soal no 15 : ', () => {

    expect(roma('I')).toEqual(1)
    expect(roma('II')).toEqual(2)
    expect(roma('III')).toEqual(3)
    expect(roma('V')).toEqual(5)
    expect(roma('VI')).toEqual(6)
    expect(roma('X')).toEqual(10)
    expect(roma('L')).toEqual(50)
    expect(roma('C')).toEqual(100)
    expect(roma('D')).toEqual(500)
    expect(roma('M')).toEqual(1000)
    expect(roma('MMXVIII')).toEqual(2018)

})