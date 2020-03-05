function censor(text, censoreWords, censoreSymbol ='#') {
    const filter = new RegExp(`\\b(${censoreWords.join('|')})\\b`,'gi')

    const sensor = (text) => {
        return text.split(/\b/).map((word) => {
            return censoreWords.includes(word.toLowerCase()) ? censoreSymbol.repeat(word.length) : word
        }).join('');
    };
return sensor(text);

}

module.exports = censor;