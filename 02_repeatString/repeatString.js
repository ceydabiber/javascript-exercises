const repeatString = function(string, num) {
    let newString = string;

    if (num === 0){
        return  "";
    }
    if(num < 0){
        return "ERROR";
    }
    else{
        for( let i = 1; i < num; i++){    
            newString += string;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
