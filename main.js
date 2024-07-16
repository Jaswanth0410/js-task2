// Array Creation and Initialization

console.log("Array Creation and Initialization");
let arr = [10, 20, 30, 40, 50];
console.log(arr);

// Array Manipulation
// Array push

console.log("Array push");
arr.push(60);
console.log(arr);

// Array pop

console.log("Array Pop");
arr.pop();
console.log(arr);

// Array Searching

console.log("Array Searching");
console.log(arr.indexOf(30));

// Array Filtering

console.log("Array Filtering");
console.log(arr.filter((x) => x < 30));

// Array Mapping

console.log("Array Mapping");
console.log(arr.map((x) => x * 2));

// Array Sorting

console.log("Array Sorting");
let  arr1 = [10,50,40,60,30,20]
console.log(arr1);
console.log(arr1.sort());

// Array Reverse

console.log("Array Reverse");
console.log(arr.reverse());

// Array Join

console.log("Array Join");
console.log(arr);
console.log(arr.join("+"));

// Array Destructing

console.log("Array Destructing");
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
let [a, b, c, d, e] = arr2;
console.log(a);

// Array Spreading

console.log("Array Spreading");
console.log(arr2);

// Array finding maximum and minimum

console.log("Array finding maximum and minimum");
console.log(arr);
console.log("Max Value : ",Math.max(...arr));
console.log("Min Value : ",Math.min(...arr));