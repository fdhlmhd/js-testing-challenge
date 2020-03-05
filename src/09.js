function symetrical (value) {
    const result = (typeof(value) === "string") ? value : value.toString(); 
    const result2 = result.split('').reverse().join(''); 
    return result2 == result

}


module.exports = symetrical;



