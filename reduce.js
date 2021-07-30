var arr = [10,20,30,40,50,60,70,80,90];
var sum = arr.reduce(function (previus_value , current_value, index, arrayItself) {
    return previus_value + current_value
})

console.log(sum);



// syntax 

// arr.reduce(function (previus_value , current_value, index, arrayItself)