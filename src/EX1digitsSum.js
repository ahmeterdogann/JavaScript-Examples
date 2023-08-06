//parametresi ile aldığı üç basamaklı bir tam sayının sayının basamakları toplamına geri dönen digitsSum fonksiyonunu yazınız
function digitsSum(val) {
    let digitSum = 0;

    while(val != 0) {
       let digit = val % 10;
       digitSum += digit;
       val = parseInt(val / 10);
    }

    return Math.abs(digitSum);
}
function main() {
    console.log(digitsSum(-123123))
}

