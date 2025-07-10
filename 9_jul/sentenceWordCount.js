
function sentenceWordCount(sentence) {

    let extraCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '/', '.', ',', '?', ':']

    for (const character of extraCharacterArray) {

        sentence = sentence.replaceAll(character, "");

    }

    console.log(sentence)

    let array = sentence.trim().toLowerCase().split(" ");

    let obj = {};

    for (let i = 0; i < array.length; i++) {

        array[i] in obj ? obj[array[i]]++ : obj[array[i]] = 1

    }

    return obj;

}

let sentence = "its me tarak and iam doing some js problems based on a simple question and its good."

console.log()
console.log(sentenceWordCount(sentence))
console.log()