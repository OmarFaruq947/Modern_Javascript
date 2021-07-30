// syntax ...
// arr.slice( start_value , End_value )

var arr = [1,2,3,4,5,6,7,8,9,5,4,6,1,2,36,4,8,97,5,25]



const result2 = arr.splice( 4 , 0 , 100,200,300,800,700)
console.log(arr);


const result = arr.slice(4, 10)
console.log("slice result : ",result);

