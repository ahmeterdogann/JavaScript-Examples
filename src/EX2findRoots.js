//parametresi ile aldığı ikinci denklemin katsayılarına göre köklerini bulup ekrana yazdıran findRoots fonksiyonu

function findRoots(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0 )
        console.log("Gerçek kök yok")
    else {
        let x1 = (-b + Math.sqrt(delta)) / 2 * a
        let x2 = (-b - Math.sqrt(delta)) / 2 * a
        console.log(`X1 = ${x1}`)
        console.log(`X2 = ${x2}`)
    }
}

findRoots(1, -1, 1)
findRoots(1, -2, 1)
findRoots(1, -1, -6)


