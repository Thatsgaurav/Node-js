const name = "Gaurav";
let age = 20;
const hasHobbies = true;

age = 21;

const summarizeUser = (userName, userAge, userHobbies) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHobbies
  );
};

// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
