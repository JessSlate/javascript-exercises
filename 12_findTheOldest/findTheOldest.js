const findTheOldest = function(people) {
    const sortedAge = people.sort((person1, person2) => {
        let lifespan1, lifespan2;
        if(!person1.yearOfDeath){
            lifespan1 = new Date().getFullYear() - person1.yearOfBirth;
        } else lifespan1 = person1.yearOfDeath - person1.yearOfBirth;
        if(!person2.yearOfDeath){
            lifespan2 = new Date().getFullYear() - person2.yearOfBirth;
        } else lifespan2 = person2.yearOfDeath - person2.yearOfBirth;
        return lifespan1 > lifespan2 ? -1:1;
    });
    return(sortedAge[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
