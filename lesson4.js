
console.clear();

var person  = {
    name: 'shane-osbourne'
};

var filters = {
    'deslugify': x => x.replace('-', ' '),
    'capitalize': x => x.toUpperCase(),
    'uppercase' : x => x.charAt(0).toUpperCase() + x.slice(1)
};

var input    = 'name | deslugify | uppercase '; // SHANE OSBOURNE
var sections = input.split('|').map(x => x.trim()); // [name, deslugify, uppercase]
var ref      = person[sections[0]];
var output   = sections
    .slice(1)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

console.log(output);
