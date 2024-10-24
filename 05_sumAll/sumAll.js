const sumAll = function(a,b) {
    let x = 0;
	let y = 0;
	if(isNaN(a)==true||isNaN(b)==true||a<0||b<0||
		Number.isInteger(a)==false||
		Number.isInteger(b)==false){
		return "ERROR";	
	}
	if(a>b){
		x=b;
		y=a;
	} else{
		x=a;
		y=b;
	  }	
	  let sum = 0;
	  let counter = x;
	for(let i=0;i<y;i++){
		sum = sum + counter;
		counter = counter+1;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
