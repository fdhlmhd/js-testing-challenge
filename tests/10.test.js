const censor = require('../src/10')

test('test soal no 10', () => {
    expect(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toEqual('#### ingin makan #### goreng.')
})