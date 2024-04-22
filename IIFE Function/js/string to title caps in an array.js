const capital = (function(sentence){
    let str = sentence.split(" ");
    for (let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
})("i am studying full stack development course in guvi, i am a developer");



console.log(capital);
