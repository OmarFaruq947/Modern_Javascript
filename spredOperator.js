var arr = [1,2,3,4]
var puuu = arr.push(999);
console.log(arr);


var a = [...arr]
console.log(...a, [99,88,77,66,55,44,33,22,11,100]);  // using spreed operator 

console.log( a.concat([99,88,77,66,55,44,33,22,11,100]));  // using concat function 





var number_1 = [1,2,3]
var number_2 = [4,5,6]
var number_3 = [7,8,9]

var all_number = [...number_1, ...number_2, ...number_3]
console.log(all_number);