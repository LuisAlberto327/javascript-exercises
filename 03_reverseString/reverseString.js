const reverseString = function(message) {
    let text = message;
	const array = text.split("");
	array.reverse();
	const result = array.join("");
	return result;
};

// Do not edit below this line
module.exports = reverseString;
