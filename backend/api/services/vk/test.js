import { Auth } from './auth.js'
// import Phantom from 'phantom'


const URL = 'https://vk.com/id10874687'
// const url = 'http://google.com/'

let main = async () => {

    // const phantom = await Phantom.create()

    try {
      let z = await Auth('johndoe@example.com', 'password')

      let w = await z.authorize()

      console.log(w)
    } catch (err) {

      console.log(err)
    }


    // phantom.addCookie({
    //   name: 'Valid-Cookie-Name',
    //   value: 'Valid-Cookie-Value',
    //   domain: 'localhost',
    //   path: '/foo',
    //   httponly: true,
    //   secure: false,
    //   expires: (new Date()).getTime() + (1000 * 60 * 60)
    // })



    // const page = await phantom.createPage()

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


