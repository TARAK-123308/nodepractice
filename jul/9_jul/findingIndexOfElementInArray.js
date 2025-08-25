
function findingIndexOfElementInArray(element, array) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] == element) {

            return i;

        }

    }

    return -1;

}

console.log()
console.log(findingIndexOfElementInArray(19,[1,2,3,9,8,7,11,12,13,4,5,6]))
console.log()