
console.clear();

// Array.prototype.some()

var tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Watch the array lessons on egghead.io',
        completed: true
    }
];

function addTask(title) {
  if(tasks.some( x => x.title === title)) {
    
  return console.log('!');}
  tasks.push({title: title, completed: false});
};

addTask("Do laundry");

tasks = tasks
    .map(x => x.completed ? `${x.title}` : x.title)
    .join('\n');
console.log(tasks);