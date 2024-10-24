const repeatString = function(text,times) {
    if(times<0) return "ERROR";
	else return text.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;