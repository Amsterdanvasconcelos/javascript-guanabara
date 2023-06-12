function fatorial(num) {
    let fatorial = 1;
    for (let pass = num ; pass > 1 ; pass--) {
        fatorial *= pass;
    }
    return fatorial;
}

console.log(fatorial(5));