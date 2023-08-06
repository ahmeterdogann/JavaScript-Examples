function loop() {
    EXIT_LOOP:
    for(let i = 0; i < 10; i++)
        for (let k = 0; k < 10; k++) {
             console.log(`(${i} , ${k})`)   
            if (k == 5)
                break EXIT_LOOP;
        }
        
}

loop()