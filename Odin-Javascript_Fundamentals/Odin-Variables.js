/*
We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration. Block scoped -A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly
braces is a block.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.

const – is like let, but the value of the variable can’t be changed. Block scoped - const declarations can only be accessed within the block they were declared. 
Variables should be named in a way that allows us to easily understand what’s inside them.

*/

let message;
message = "Hello";

alert(message);


let user = 'John', age = 25, message2 = 'Hello';
message3 = message2 +` Im ${user} `+" And I'm "+ age;
alert(message3);


const myBirthday = '18.04.1982';
alert(` My Birthday is ${myBirthday}`);

const John = {
  Name: "John Doe",
  Role: "Student",
  Ambition: "Developer"
};

alert(`Hello Again!, My name is ${John.Name}`);
alert(`And I am ${John.Role}`);
alert(`Someday, I'm gonna become ${John.Ambition}`);