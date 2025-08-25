// let value = "some string";
// let s = " ";
// value.split(" ");
// s += value.toUpperCase();
// console.log(s);

function Capitalize(words){
    words.split(" ");
    let newstring = [];
    for(let word of words){
        let newword = word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
        newstring.push(newword);
    }
    newstring.join("");
    console.log(newstring);
}

Capitalize("iam tarak sri chandrahas aka bat man")