/**
 * @typedef {Object} Person
 * @property {string} name - Person's name
 * @property {string} lastname - Person's lastname
 * @property {number} age - Person's age
 * @property {number} weight - Person's weight
 * @property {number} height - Person's height
 */

/**
 * @typedef {Object} PeopleResponse
 * @property {number} ageProm - People average age
 * @property {number} heightProm - People average height
 * @property {Person} youngerPerson - Younger person information
 * @property {Person} tallerPerson - Taller person information
 */

/** 
 * The height in cm of several people was taken, in addition, the age of each person and 
 * extra information are also known. An algorithm is required to calculate average age and 
 * average height. In addition, we need to know the information of the tallest person, and 
 * the information of the youngest person.
 * 
 * @param {Person[]} people - People information to be processed
 * 
 * @returns {PeopleResponse}  - Processed information
*/

function peopleInformation(people) { 
  return people.reduce((acc, curr, index) => {
    acc.ageProm += curr.age;
    acc.heightProm += curr.height;
    acc.youngerPerson = acc.youngerPerson.age < curr.age ? acc.youngerPerson : curr;
    acc.tallerPerson = acc.tallerPerson.height < curr.height ? curr : acc.tallerPerson;

    if (index === people.length - 1) {
      acc.ageProm /= people.length;
      acc.heightProm /= people.length;

      acc.ageProm = Math.round(acc.ageProm);
      acc.heightProm = Math.round(acc.heightProm);
    }

    return acc;
  }, {
    ageProm: 0, heightProm: 0, youngerPerson: { age: 100 }, tallerPerson: { height: 0 }, 
  });
}

module.exports = peopleInformation;
