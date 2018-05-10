// const person = {
//   name: 'Patrick',
//   age: 35,
//   location: {
//     city: 'Springfield',
//     temp: 75,
//   },
// };

// const { name, age } = person;

// console.log(`${name} is ${age}, `);

// const { city, temp } = person.location;

// if (city && temp) {
//   console.log(`It's ${temp} in ${city}.`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  },
};

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);