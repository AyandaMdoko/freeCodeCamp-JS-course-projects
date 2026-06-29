const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

// Function to get the species of an animal
const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

// Function to get the age of an animal
const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));


const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

// Function to update the age of an animal
const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));


const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

// Function to check if an animal has a habitat property
const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

// Function to get a property of an animal by name
const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};

console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));

