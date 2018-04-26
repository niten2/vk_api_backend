import Phantom from 'phantom'

const cookie = [
{
    "domain": ".vk.com",
    "expirationDate": 1524488429,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixcurr_audio",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "318955169_456239134",
    "id": 1
},
{
    "domain": ".vk.com",
    "expirationDate": 1535964051,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixdt",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "14400",
    "id": 2
},
{
    "domain": ".vk.com",
    "expirationDate": 1526997899,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixflash",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "0.0.0",
    "id": 3
},
{
    "domain": ".vk.com",
    "expirationDate": 1524672365,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixgp",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "71a62bc960f64f827da280f425070894",
    "id": 4
},
{
    "domain": ".vk.com",
    "expirationDate": 1535293658.905337,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixlang",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "0",
    "id": 5
},
{
    "domain": ".vk.com",
    "expirationDate": 1555500066.613646,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixrefkey",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "6bc3749779b463c917",
    "id": 6
},
{
    "domain": ".vk.com",
    "expirationDate": 1555941899,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixscreen_depth",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "24",
    "id": 7
},
{
    "domain": ".vk.com",
    "expirationDate": 1524676528,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixseenads",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1",
    "id": 8
},
{
    "domain": ".vk.com",
    "expirationDate": 1544786463.588697,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixsid",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "c8799ab6d6a818e3de6277c63c555cf4973a7e1e4bbc33e41c71e",
    "id": 9
},
{
    "domain": ".vk.com",
    "expirationDate": 1536410353.690474,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixstid",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1921575710_def217aa134502bced",
    "id": 10
},
{
    "domain": ".vk.com",
    "expirationDate": 1524407331,
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixsts",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "%7B%22data%22%3A%5B%5B1524406467%2C%22time_spent%22%2C%7B%22board%22%3A%7B%22full%22%3A10998%2C%22last%22%3A1524406467352%2C%22options%22%3A%7B%7D%7D%7D%5D%5D%2C%22uniqueId%22%3A55109228%7D",
    "id": 11
},
{
    "domain": ".vk.com",
    "hostOnly": false,
    "httpOnly": false,
    "name": "remixvkcom",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "1",
    "id": 12
}
]



const URL = 'https://vk.com/id10874687'
// const url = 'http://google.com/'

let main = async () => {

    const phantom = await Phantom.create()

    const page = await phantom.createPage()

    await Promise.all(
      cookie.map(async (cook) => {
        await page.addCookie(cook)
      })
    )


    await page.open(URL)


//     let x = await page.evaluate(() => {

//       // return document.getElementsByClassName('flat_button button_wide')[0].click()

//       console.log(11111)

//       var element = document.getElementsByClassName('flat_button button_wide')[0]

//       // console.log(element)

//       var event = document.createEvent('MouseEvents')
//       event.initMouseEvent('click', true, true, window, 1, 0, 0 )

//       element.dispatchEvent(event)

//       console.log(22222)
//       // // console.log(z)
//       // return "11111"
//     })

//   console.log(x)


    page.evaluate(function()  {
        function click(elm) {
            var event = document.createEvent("MouseEvent");
            event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            elm.dispatchEvent(event);
        }

        // document.querySelector('input[name="username"]').value = "*******";
        // document.querySelector('input[name="password"]').value = "*******";
        console.log(document)

        const el = document.getElementsByClassName('flat_button button_wide')[0]

        click(el);
    });






   // window.setTimeout(
   //      function () {
   //          handle_click_reaction( page );
   //      },
   //      5000 // give page 5 seconds to process click
   //  );



    // (selector) => {
    //     return
    // }, 'Добавить в друзья')

    await page.render('example.png');

    // phantom.exit()
    setTimeout(() =>{
        // wait a little to maybe see the click result
        phantom.exit();
    }, 2000);

    // try {
    //   let z = await Auth('johndoe@example.com', 'password')

    //   let w = await z.authorize()

    //   console.log(w)
    // } catch (err) {

    //   console.log(err)
    // }





    // // await page.property('viewportSize', { width: 1024, height: 600 })

    // const status = await page.open(URL)

    // console.log(status)


    // var content = page.content;

    // console.log('Content: ' + content);

    // phantom.exit();




    // await page.injectJs('node_modules/jquery/dist/jquery.js')

    // let coordinate = await page.evaluate( () => {
    //   // let selector = "input[value='Поиск в Google']"
    //   let selector = "input[value='Мне повезёт!']"

    //   let coordinates = document.querySelector(selector).getBoundingClientRect()
    //   return coordinates
    // })


    // await page.sendEvent('click', coordinate.left + coordinate.width / 2, coordinate.top + coordinate.height / 2)

    // await page.onLoadFinished

    // setTimeout(() => {
    //     await page.render('TC0002.jpg')
    //     instance.exit()
    // }, 5000)



    // await page.render('test.jpeg')
    // await instance.exit()
    // console.log("exit")
}

main()


