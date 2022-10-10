// Codecademy Project - message generator
// this will be the solution file

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

// generate random int with an array length passed as an argument
const genRandomInt = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

// console.log(genRandomInt(7));
