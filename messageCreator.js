// Codecademy Project - message generator

const subjectMessage = [
  "The administrator",
  "Everyone",
  "Peter Telleborian",
  "We",
  "My brother",
  "I",
  "Robot Unit-010",
];
const predicateMessage = [
  "managed",
  "agreed",
  "loved",
  "decided",
  "enjoyed",
  "began",
  "desired",
];
const complementMessage = [
  "to endebt several estates.",
  "to develop new strategies.",
  "to eat carrots.",
  "to have nice things.",
  "to have long walks.",
  "to itch all over.",
  "to rule the universe.",
];

// message storage array
const savedMessages = [];

// generate random int (with an array length passed as an argument)
const genRandomInt = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};
// console.log(genRandomInt(7));

// gets a random item from an array
const getRandomArrayItem = (array) => {
  const itemIndex = genRandomInt(array.length);
  return array[itemIndex];
};
// console.log(getRandomArrayItem(complementMessage));

// generates a new message
const genMessage = () => {
  const firstElement = getRandomArrayItem(subjectMessage);
  const secondElement = getRandomArrayItem(predicateMessage);
  const thirdElement = getRandomArrayItem(complementMessage);
  return firstElement + " " + secondElement + " " + thirdElement;
};
// console.log(genMessage());

// stores generated messages into an array
const storeMessages = () => {
  savedMessages.push(genMessage());
};
/* storeMessages();
storeMessages();
storeMessages();
storeMessages();
storeMessages();
storeMessages();
storeMessages();
console.log(savedMessages); */
