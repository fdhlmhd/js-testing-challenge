function convert(x){
    switch (x) {
        case 'I' : return 1;
        case 'V' : return 5;
        case 'X' : return 10;
        case 'L' : return 50;
        case 'C' : return 100;
        case 'D' : return 500;
        case 'M' : return 1000;
        default : return -1;
    }
}



function roman(text) {
    if (text == null) 
        return -1

    let nomor = convert(text.charAt(0));
    let a,b;

    for( let i =1; i < text.length; i++){
        a = convert(text.charAt(i-1))
        b = convert(text.charAt(i))

    if(b <= a) {
        nomor += b
    }else {
        nomor = nomor - a * 2 + b
    }
    }

    return nomor
}

module.exports = roman;
