// Arrow Functions

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

const add = (a, b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));

// ------------------------------------------------------------
// Object, Properties & Methods

const person = {
  name: "Gaurav",
  age: 20,
  green() {
    console.log("Hi, I am " + this.name);
  },
};

// Destructuring
const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

const copiedPerson = { ...person };
console.log(copiedPerson);

person.green();

// Arrays & Array Methods

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);
hobbies.push("Programming");
console.log(hobbies);

// Spread & Rest Operators
const copiedArrays = [...hobbies];
console.log(copiedArrays);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
