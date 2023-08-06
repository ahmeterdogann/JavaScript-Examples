//parametresiyle aldığı tamsayının tersini döndüren getReverse fonksiyonu
function getReverse(val) {
    let reversedVal = 0;

    while(val) {
        reversedVal = reversedVal * 10 + val % 10
        val = parseInt(val / 10)
    }

    return reversedVal
}

console.log(getReverse(12345))
console.log(getReverse(-12345))
console.log(getReverse(40492))
