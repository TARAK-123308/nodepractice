
function mostRepeatedElementInArray( array ) {

    let obj = {};

    for (let i = 0; i < array.length; i++) {

        if (array[i] == " ") {
            continue;
        }

        array[i] in obj ? obj[array[i]]++ : obj[array[i]] = 1

    }

    let maximumOccuredCountofElements = Math.max(...Object.values(obj))

    return Object.keys(obj).filter((value)=>(obj[value] == maximumOccuredCountofElements))
    
}

console.log()
console.log(mostRepeatedElementInArray([1,1,1,2,2,3,3,3,3,4,4,4,4]))
console.log()