let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };


let arr = [ john, pete, mary ];


function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]["age"];
    }
    return Math.round(sum / arr.length);
}

const out = getAverage(arr);
console.log(out);