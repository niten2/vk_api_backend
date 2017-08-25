// var links = [];
// var casper = require('casper').create();

// getLinks() => {
//     var links = document.querySelectorAll('h3.r a');
//     return Array.prototype.map.call(links, function(e) {
//         return e.getAttribute('href');
//     });
// }

// casper.start('http://google.fr/', function() {
//    // Wait for the page to be loaded
//    this.waitForSelector('form[action="/search"]');
// });

// casper.then(function() {
//    // search for 'casperjs' from google form
//    this.fill('form[action="/search"]', { q: 'casperjs' }, true);
// });

// casper.then(function() {
//     // aggregate results for the 'casperjs' search
//     links = this.evaluate(getLinks);
//     // now search for 'phantomjs' by filling the form again
//     this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
// });

// casper.then(function() {
//     // aggregate results for the 'phantomjs' search
//     links = links.concat(this.evaluate(getLinks));
// });

// casper.run(function() {
//     // echo results in some pretty fashion
//     this.echo(links.length + ' links found:');
//     this.echo(' - ' + links.join('\n - ')).exit();
// });


// import Casper from 'casperjs/bin/casperjs.js'

// console.log(Casper)

// let casper = Casper.create();
// var casper = require('casperjs').create();
// var links;

// function getLinks() {
// // Scrape the links from top-right nav of the website
//     var links = document.querySelectorAll('ul.navigation li a');
//     return Array.prototype.map.call(links, function (e) {
//         return e.getAttribute('href')
//     });
// }

// // Opens casperjs homepage
// casper.start('http://casperjs.org/');

// casper.then(function () {
//     links = this.evaluate(getLinks);
// })

// casper.run( () => {
//     for(var i in links) {
//         console.log(links[i]);
//     }
//     casper.done();
// })
