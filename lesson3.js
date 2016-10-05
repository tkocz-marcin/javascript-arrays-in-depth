
console.clear();
var firstBrand = ['fiat', 'opel', 'audi', 'vw'],
    secondBrand = ['alfa Romeo', 'Lada'],
    newBrand = firstBrand.concat(secondBrand);
    if(newBrand.indexOf('ferrari') === -1) {
      newBrand = newBrand.concat('ferrari');
    }
    newBrand = newBrand.map(x => x.charAt(0).toUpperCase() + x.slice(1))
console.log(newBrand);

// var whitelist = ['.css', '.js']
// var events = [
//   {
//     file: 'css/core.css'
//   },
//   {
//     file: 'js/app.js'
//   },
//   {
//     file: 'index.html'
//   }
// ];

// var filtered = events.filter(event => {
//   var ext = event.file.substr(event.file.lastIndexOf('.'));
//   return whitelist.indexOf(ext) > -1;
// });

// console.log(filtered);