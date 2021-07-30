var arr = [1,2,3,4,5,6,7,8,9,5,4,6,1,2,36,4,8,97,5,25]

console.log(arr.findIndex(function(current_value){
    return current_value > 25;
}));


console.log(arr.findIndex(function(current_value){
    return !(current_value > 25);
}));