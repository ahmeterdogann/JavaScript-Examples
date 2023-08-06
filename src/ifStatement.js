//if deyiminde parantezi içerisindeki ifade boolean türden olmasa bile otomatik tür dönüşümü kurallarına göre boolean türüne dönüştürülür

function main() {
    let a = "ankara"
    if (a)
        console.log("ankara")
    
    a = ""
    if (a)
        console.log("true1")

    a = " "
    if (a)
        console.log("true2")

    a = "0"
    if (a)
        console.log("true3")

    a = "true"
    if (a)
        console.log("true4")
}

main()