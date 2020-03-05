function isIsogram(text){
    return ! /(.).*\1|\d/i.test(text)
}

module.exports = isIsogram;