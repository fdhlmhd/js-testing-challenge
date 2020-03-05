function arrayMirroring (numberList = []) {
    const numberList2 = [...numberList].reverse(numberList)
    return numberList.concat(numberList2);
}

console.log(arrayMirroring([1,2,3]));


module.exports = arrayMirroring;