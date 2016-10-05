
console.clear();

const lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Functions in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

const minViews = 1000,
      maxViews = 2000,
      searchTerm = 'array';

const filtered = lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views > minViews && x.views < maxViews)
    .sort((a, b) => b.views - a.views)
    .map(x => `  <li>${x.title}</li>`)
    .join('\n');

console.log(`<ul>
${filtered}
</ul>`);