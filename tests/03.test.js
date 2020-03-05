const mebiToKibi = require('../src/03')

test('test soal no 03', () => {
    expect(mebiToKibi(1)).toEqual(1024)
})
