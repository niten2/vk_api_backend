const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open('https://stackoverflow.com/');
    console.log(status);
    const content = await page.property('content');
    console.log(content);
    await instance.exit();
}());


setTimeout(5000)

// var page = require('webpage').create();
// // var url = "http://vk.com/im"
// var url = "http://google.com"

// phantom.addCookie({
//   'name': 'remixsid',
//   'value': "",
//   'domain': 'vk.com',
// });

// page.settings = {
// 	loadImages: false,
// 	javascriptEnabled: true,
// 	userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1',
// };

// page.open(url, function(status) {
//   // console.log("Status: " + status);

//   // if (status !== 'success') {
//   //   console.log('Unable to access network');
//   // } else {
//   //   var ua = page.evaluate(function() {
//   //     return document.getElementById('myagent').textContent;
//   //   });
//   //   console.log(ua);
//   // }


// // Перейти к беседе: Настёночка Тюменцева


//   // if(status === "success") {
//   //   page.render('2example.png');
//   // }


//   phantom.exit();
// });
