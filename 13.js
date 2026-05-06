function reverseString(text) {
    let text1 = "";
    for(let i = text.length - 1; i >= 0;i--){
     text1 += text[i];    
 }
   return text1;
}
console.log(reverseString("hello"));