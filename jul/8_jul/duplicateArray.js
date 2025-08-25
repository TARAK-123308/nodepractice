function dup(arr){
for(let i = 0;i < arr.length; i++){
    for(let j = i+1;j < arr.length; j++){
        if(arr[i] === arr[j]){ arr.splice(j,1);
        j--;}
    }
}
 return arr;
}
console.log(dup([1, 2, 3, 4, 4, 5]));

