const isIsogram = require('../src/14')

test('test soal no 14', () =>{
    expect(isIsogram('gelas')).toEqual(true)
    expect(isIsogram('makan')).toEqual(false)
})