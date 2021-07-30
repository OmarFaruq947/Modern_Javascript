var arr = [1,2,3,4,5,6,7,8,9,5,4,6,1,2,36,4,8,97,5,25]

var result_Eliment = arr.find(function(value, index, array){
    return value > 10
})

var result_Index = arr.findIndex(function(ind){
    return ind > 10
})

var result_filter = arr.filter(function(fil){
    return fil > 10
})

console.log("prottasito value is ",result_Eliment, ", index number is ", result_Index, " and  Before all value is ",result_filter );
