
function mostOccuredLetterInString( string ) {

    let array = string.toLowerCase().split("");

    let obj = {};

    for (let i = 0; i < array.length; i++) {

        if (array[i] == " ") {
            continue;
        }

        array[i] in obj ? obj[array[i]]++ : obj[array[i]] = 1

    }

    let maximumOccuredCountofElement = Math.max(...Object.values(obj))

    return Object.keys(obj).filter((value)=>(obj[value] == maximumOccuredCountofElement))

}

console.log()
console.log(mostOccuredLetterInString('Tarak'))
console.log()