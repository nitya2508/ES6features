var calculateArea = function(height = 50, width = 80) {  
   let area= height * width;
   
   return area;
}

var calcArea = calculateArea();
console.log(calcArea);

console.log(calculateArea(20));

console.log(calculateArea(20, 30));

console.log(calculateArea(0, 20));