const foo = ['one', 'two', 'three', 'four','five'];
const [red,blue, ...green] = foo
// [red, yellow, ...green]=['one', 'two', 'three', 'four','five']

console.log(red,blue); // "one"
// console.log(yellow); // "two"
console.log(green); // "three"

