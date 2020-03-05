const repeatLetter = require('../src/07')

test('test soal no 07', () => {
    expect(repeatLetter('Hello World', 2)).toEqual('HHeelllloo WWoorrlldd')
})