const sumAll = function(num1, num2) {
    let sumAll = 0;
    if (num1 > num2){
        for(let i = num2; i<=num1; i++){
            sumAll += i; 
        }
    }
    if (num1 < num2){
        for(let i = num1; i<=num2; i++){
            sumAll += i; 
        }
    }

    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
