// //spread operator
// var spread_operator;
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];
// //Equate to

console.log("arr3", arr3)
var arr4 = arr1.concat(arr2);

console.log(arr4)

// // //clone object using spread operator

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { fo: 'baz', y: 13 };

var clonedObj1 = { obj1 };
var clonedObj = { ...obj1 };
console.log(obj1,"========" ,clonedObj1)
console.log(obj1,"--------" ,clonedObj)


// // //merge object using spread operator

var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj)