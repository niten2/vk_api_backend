// import Phantom from 'phantom'

// const URL = 'https://vk.com/id10874687'

// let main = async () => {
//     const phantom = await Phantom.create()

//     const page = await phantom.createPage()

//     await Promise.all(
//       cookie.map(async (cook) => {
//         await page.addCookie(cook)
//       })
//     )

//     await page.open(URL)


//     page.evaluate(function()  {
//         function click(elm) {
//             var event = document.createEvent("MouseEvent");
//             event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//             elm.dispatchEvent(event);
//         }

//         // document.querySelector('input[name="username"]').value = "*******";
//         // document.querySelector('input[name="password"]').value = "*******";
//         console.log(document)

//         const el = document.getElementsByClassName('flat_button button_wide')[0]

//         click(el);
//     });

//     await page.render('example.png');

//     setTimeout(() =>{ phantom.exit() }, 2000)
// }

// main()
