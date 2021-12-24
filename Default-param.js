var calculateArea = function(length = 50, width = 80) {  
    area= length * width;
    return area;
}

let calArea= calculateArea();
console.log(calArea);

console.log(calculateArea(20));

console.log(calculateArea(20,30));

console.log(calculateArea(0,20));
