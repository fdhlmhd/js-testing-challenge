const arrayMirroring = require('../src/08')

test('test soal no 08', () => {
    expect(arrayMirroring([1 , 2, 3])).toEqual([1, 2, 3, 3, 2, 1])
})
