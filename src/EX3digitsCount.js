//parametresiyle aldığı bir sayının basamak sayısını bulan digitsCount fonksiyonu

function digitsCount(val) {
    let count = 0;

    do {
        count++
        val = parseInt(val / 10)
    }while(val)
    
    return count
}

console.log(digitsCount(0))
console.log(digitsCount(123))
console.log(digitsCount(-123))
console.log(digitsCount(1))
