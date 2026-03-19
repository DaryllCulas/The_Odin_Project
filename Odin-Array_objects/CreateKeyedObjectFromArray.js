let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let id = obj["id"];
        result[id] = obj;
    }
    return result;
}


// either way

// function groupById(arr) {
//   return arr.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {});
// }

let usersById = groupById(users);
console.log(usersById); 