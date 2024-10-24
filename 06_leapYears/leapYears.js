const leapYears = function(year) {
    let x = false;
	if(year%4==0){
		x=true;
	}
	if(year%100==0){
		x=false;
	}
	if(year%400==0){
		x=true;
	}
		return x;
};

// Do not edit below this line
module.exports = leapYears;
