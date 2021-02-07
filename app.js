var d = {
    "2020-01-01":4,
    "2020-01-02":4,
    "2020-01-03":6,
    "2020-01-04":8,
    "2020-01-05":2,
    "2020-01-06":-6,
    "2020-01-07":2,
    "2020-01-08":-2
}

// module.exports.testFunc = function(){
//     return 'hello';
// }


var funcTest = module.exports =  function(object){
    var result ={};
    for(key in object){
        var weekday = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
        var date = new Date(key);
        var n = weekday[date.getDay()];
    
        var temp = (result[n])|| 0;
        result[n] = temp + object[key];
    }
    console.log(result);
    return result;
}

funcTest(d);