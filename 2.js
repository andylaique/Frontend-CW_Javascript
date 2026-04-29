//The "Total Sum"
function sumUpTo(max) {
    let b = 0;
    for (let i = 0; i <= max; i++){
        b = i+b;
        return b;
    }
}
sumUpTo(5);