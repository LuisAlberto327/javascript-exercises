const fibonacci = function(num) {
    let myNum = Number(num);
    if(myNum==0)return 0;
    else if (myNum<0) return "OOPS"
    let array = [1];
    for(let i=1;i<myNum;i++){
      let x = array.reduce((total,item)=>
        array[array.length-1]+array[array.length-2])
        array.push(x);
    }
    return array[myNum-1];
  };

// Do not edit below this line
module.exports = fibonacci;
