
console.clear();
var name = 'shane osbourne bill';

var upper = name.split(' ') // [shane, osbourne]
.map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Shane, Osbourne]
.join(' ');

console.log(upper);

var person = ['jan', 'nowak', 'kowalski'];
var editPerson = person.map(x => x.charAt(0).toUpperCase()+x.slice(1));
    editPerson = editPerson.join('\n');

console.log(editPerson);