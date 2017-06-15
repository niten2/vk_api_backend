const phantom = require('phantom');

// const url = 'http://vk.ru/'
const url = 'http://google.com/'

let main = async () => {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.property('viewportSize', { width: 1024, height: 600 });
    const status = await page.open(url)
    console.log(status)

    await page.injectJs('node_modules/jquery/dist/jquery.js')

    let coordinate = await page.evaluate( () => {
      // let selector = "input[value='Поиск в Google']"
      let selector = "input[value='Мне повезёт!']"

      let coordinates = document.querySelector(selector).getBoundingClientRect()
      return coordinates
    })


    await page.sendEvent('click', coordinate.left + coordinate.width / 2, coordinate.top + coordinate.height / 2);

    await page.onLoadFinished

    // setTimeout(() => {
    //     await page.render('TC0002.jpg');
    //     instance.exit();
    // }, 5000);



    await page.render('test.jpeg');
    await instance.exit();
    // console.log("exit")
}


main()

    // console.log(coordinate)

    // console.log(rect.left + rect.width / 2, rect.top + rect.height / 2)


    // console.log(zz)


    // const content = await page.property('content');
    // console.log(content);

    // var rect = await page.evaluate( () => {
    //   let
    //     return .getBoundingClientRect();
    // });

    // console.log(rect)

    // await page.sendEvent('click', rect.left + rect.width / 2, rect.top + rect.height / 2);


    // let rect = await page.evaluate( () => {
    //   let field = $("input[title='Поиск']")
    //   field.val("sdsfsdf")

      // var button = $("input[value='Поиск в Google']")


      // let zz =  button.getBoundingClientRect()
      // return zz

      // let el = document.querySelector(selector)

      // let selector = "input[value='Поиск в Google']"
      // let coordinates = document.querySelector(selector).getBoundingClientRect()

      // var ev = document.createEvent("MouseEvent");
      // ev.initMouseEvent(
      //     "click",
      //     true /* bubble */, true /* cancelable */,
      //     window, null,
      //     coordinates.left, 0, 0, 0, /* coordinates */
      //     false, false, false, false, /* modifier keys */
      //     0 /*left*/, null
      // );

      // el.dispatchEvent(ev);


    // })


    // console.log(page.event)
    // await page.sendEvent('keypress', page.event.key.A, null, null, 0x02000000 | 0x08000000);



    // setTimeout(()=> {console.log(333)}, 2000)

    // await handle_page(page)
