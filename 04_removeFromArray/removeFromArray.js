const removeFromArray = function() {
    let array = [];
	loop:for(let i=0;i<arguments[0].length;i++){
		for(let j=1;j<(arguments.length);j++){
			if(arguments[0][i]===arguments[j]){
				continue loop;
			}
			else x=1;
		}
		if(x==1)array.push(arguments[0][i]);
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
