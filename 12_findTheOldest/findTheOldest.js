const findTheOldest = function(people){
    const currentYear = new Date().getFullYear();
    const oldestPerson = people.reduce((winner, person) => {
        if (((person.yearOfDeath || currentYear) - person.yearOfBirth) > ((winner.yearOfDeath || currentYear) - winner.yearOfBirth)) {
            return person;
        } else if (((person.yearOfDeath || currentYear) - person.yearOfBirth) <= ((winner.yearOfDeath || currentYear) - winner.yearOfBirth)) {
            return winner;
        }
    });

    return oldestPerson;
}





module.exports = findTheOldest;
