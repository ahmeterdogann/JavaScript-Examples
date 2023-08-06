//digitsCount with log

function digitsCountWithLog(val) {
    return !val ? 1 : parseInt(Math.log10(Math.abs(val)) + 1)
}

console.log(digitsCountWithLog(213))
console.log(digitsCountWithLog(2132))
console.log(digitsCountWithLog(0))
console.log(digitsCountWithLog(21))
