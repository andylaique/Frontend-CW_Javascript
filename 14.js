function countVowels(text) {
    let vowels = 0;
    for (let i = 0; i < text.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(text[i].toLowerCase())) {
            vowels++;
        }
    }
    return vowels;
}
let text = "Emmanuel"
console.log(countVowels(text)); 