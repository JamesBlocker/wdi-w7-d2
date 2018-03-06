function reverseNumber(num) {
    var result = '';
    if (typeof(num) !== 'number') {
        return "input must be a number."
    } else {
        var strNum = '';
        var xNum = num.toString()
        var startStrNum = xNum.split('')
        for (var i = startStrNum.length -1; i >= 0; i--) {
            var char = startStrNum[i];
            strNum += char;
        }
        result = parseInt(strNum);
        return result;
    }
}

console.log(reverseNumber("Hi"));
console.log(reverseNumber(1234));