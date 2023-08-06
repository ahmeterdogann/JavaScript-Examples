function loop1() {
    let n = 10;

    while (n--) //n kez dönen döngü burdan şunu anlıyoruz n 0 ise boolean otomatik dönüşümünde false çıkar diğer durumlarda true
        console.log(n)

    console.log(`after loop n = ${n}`)
}

function loop2() {
    let n = 10;

    while (n > 0) {
        console.log(n)
        n--
    }

    console.log(`after loop n = ${n}`)
}

loop2()