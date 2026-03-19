let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < (arr.length - 1) - i; j++) {
            
            if (arr[j]["age"] > arr[j + 1]["age"]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            
        }
    }
}

// either way

// function sortByAge(arr) {
//     arr.sort((a, b) => a["age"] - b["age"]);
// }


sortByAge(arr);


console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete