
function wordLetterCount(word) {

    let array = word.toLowerCase().split("");

    let obj = {};

    for (let i = 0; i < array.length; i++) {

        if (array[i] == " ") {
            continue;
        }

        array[i] in obj ? obj[array[i]]++ : obj[array[i]] = 1

    }

    return obj;

}

console.log(wordLetterCount("Tarak"))
