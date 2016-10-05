console.clear();
var people = [
  {
    name: 'Shane',
    surname: 'As1'
  },
  {
    name: 'Sally',
    surname: 'As2'
  }
];

var people2 = [
  {
    name: 'Simon',
    surname: 'As3'
  },
  {
    name: 'Ben',
    surname: 'As4'
  }
];

people2.concat(people)
  .forEach( x => {
    console.log(`Imie: ${x.name} Nazwisko: ${x.surname}`);
  });