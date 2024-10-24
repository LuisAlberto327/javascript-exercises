const findTheOldest = function(people) {
    const peopleSorted = [];
    let age;
    
    for(let i=0;i<people.length;i++){
      if(people[i]["yearOfDeath"]&&people[i]["yearOfBirth"]){
        age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
        const myObj = {};
        myObj["age"]=age;
        myObj["name"]=people[i]["name"];
        peopleSorted.push(myObj);
      }
      else if(people[i]["yearOfDeath"]==undefined){
        const currentYear = new Date().getFullYear();
        age = currentYear - people[i]["yearOfBirth"];
        const myObj = {};
        myObj["age"]=age;
        myObj["name"]=people[i]["name"];
        peopleSorted.push(myObj);
      }
    }
    peopleSorted.sort((a,b)=>a.age-b.age)
    return peopleSorted[peopleSorted.length-1];
  };

// Do not edit below this line
module.exports = findTheOldest;
