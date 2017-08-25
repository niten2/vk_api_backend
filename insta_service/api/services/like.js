import Setting from "config/settings"

import Webdriver from "selenium-webdriver"
import log4js from "log4js"

let by = Webdriver.By
let smart_like_mode = true
let sleep_delay = 500
let like_depth_per_user = 5

// let instagram_accounts_to_be_liked = ["xenia_sobchak", "volochkova_art"]
let instagram_accounts_to_be_liked = "xenia_sobchak"

log4js.loadAppender('file')
log4js.addAppender(log4js.appenders.file('instabot.log'), 'instabot')

var logger = log4js.getLogger('instabot')
logger.setLevel('DEBUG')

let xpath_first_photo = '//header/../div/div/div[1]/a[1]'


// let xpath_like_class = '//div[@id="fb-root"]/following-sibling::div[1]/div/div/following-sibling::div[1]/div/article/div[2]/section[2]/a/span'

// "/html[@class='js logged-in ']/body/span[@id='react-root']/section[@class='_tlwfg _8f735']/main[@class='_6ltyr _rnpza']/article[@class='_42elc _qfkcw']/div/div[@class='_nljxa']/div[@class='_myci9'][1]/a[@class='_8mlbc _vbtk2 _t5r8b'][1]/div[@class='_sppa1']"



// let xpath_like = "/html[@class='js logged-in ']/body/div[2]/div[@class='_a1rcs _ea084']/div[@class='_g1ax7']/div[@class='_n3cp9 _d20no']/article[@class='_j5hrx _4xyiw _nf2ta']/div[@class='_rgrbt']/section[@class='_ghat4 _68sx3']/a[@class='_tk4ba _1tv0k']"

// let xpath_like_class = '//div[@id="fb-root"]/following-sibling::div[1]/div/div/following-sibling::div[1]/div/article/div[2]/section[2]/a/span'
// let xpath_like_button = '//div[@id="fb-root"]/following-sibling::div[1]/div/div/following-sibling::div[1]/div/article/div[2]/section[2]/a'

let xpath_nextprev_buttons = '//div[@id="fb-root"]/following-sibling::div[1]/div/div/div/div/*'

const login = async () => {
  browser.manage().window().setSize(1024, 700)
  await browser.get('https://www.instagram.com/accounts/login/')
  await browser.findElement(by.name('username')).sendKeys(Setting.insta.username)
  await browser.findElement(by.name('password')).sendKeys(Setting.insta.password)
  await browser.findElement(by.xpath('//button')).click()
}

const like = async () => {

  // let url = await browser.getCurrentUrl()
  // logger.debug('Current url:' + url)
  // browser.sleep(sleep_delay)

  // let el = await browser.cssSelector("span.coreSpriteLikeHeartOpen")
  // let xpath_like = "/html[@class='js logged-in ']/body/span[@id='react-root']/section[@class='_tlwfg _8f735']/main[@class='_6ltyr _rnpza']/div[@class='_ba61e']/div[@class='_tjnr4']/article[@class='_ksjel _j5hrx _4xyiw _nf2ta']/div[@class='_rgrbt']/section[@class='_ghat4 _68sx3']/a[@class='_tk4ba _1tv0k']/span[@class='_soakw coreSpriteLikeHeartOpen']"

// let xpath_like = "/html[@class='js logged-in ']/body/span[@id='react-root']/section[@class='_tlwfg _8f735']/main[@class='_6ltyr _rnpza']/div[@class='_ba61e']/div[@class='_tjnr4']/article[@class='_ksjel _j5hrx _4xyiw _nf2ta']/div[@class='_rgrbt']/section[@class='_ghat4 _68sx3']/a[@class='_tk4ba _1tv0k']/span[@class='_soakw coreSpriteLikeHeartOpen']"
  // let xpath_like = "/html[@class='js logged-in ']/body/div[2]/div[@class='_a1rcs _ea084']/div[@class='_g1ax7']/div[@class='_n3cp9 _d20no']/article[@class='_j5hrx _4xyiw _nf2ta']/div[@class='_rgrbt']/section[@class='_ghat4 _68sx3']/a[@class='_tk4ba _1tv0k']/span[@class='_soakw coreSpriteLikeHeartOpen']"

  // let el = await browser.findElement(browser.cssSelector("span.coreSpriteLikeHeartOpen"))


  // await browser.findElement(by.xpath(xpath_like)).click()

  await browser.findElement(by.xpath(xpath_like)).click()

  // await browser.findElement(by.name(".coreSpriteLikeHeartOpen")).click()


// $(".coreSpriteLikeHeartOpen")


  // browser.sleep(sleep_delay)
  // let like = await browser.findElement(by.xpath(xpath_like)).getAttribute('class')


  // el.click()

      // .then((classname) => {

      // logger.debug('CSS Classname: ' + classname)

      // if (smart_like_mode && (classname.indexOf('whiteoutSpriteHeartFull') > 0)) {
      //   logger.info('Already liked. Stopping...')
      //   resolve()
      //   return
      // } else {

      //   if (classname.indexOf('whiteoutSpriteHeartOpen') > 0) {
      //     browser.findElement(by.xpath(xpath_like_button)).click()
      //     browser.sleep(sleep_delay)
      //   }

      //   // Analyzing "Next" button availability
      //   browser.findElements(by.xpath(xpath_nextprev_buttons)).then(function(buttons) {
      //     logger.debug('Buttons: ' + buttons.length + ', Photo Index: ' + index)

      //     if (((index == 0) && (buttons.length == 1)) || (buttons.length == 2)) {
      //         buttons[buttons.length - 1].click().then(function() {
      //             index++
      //             if (index == max_likes) {
      //               resolve()
      //               return
      //             }
      //             like(resolve, index, max_likes)
      //         })
      //     } else {
      //         // "Next" button doesn't exist. Stop like this current user.
      //         logger.info('Next button does not exist. Stopping...')
      //         resolve()
      //         return
      //     }
      //   })

      // }
    // })
  // })
}

const getPhoto = async () => {
  let url = 'https://instagram.com/' + instagram_accounts_to_be_liked
  logger.info('Doing likes for: ' + instagram_accounts_to_be_liked)

  await browser.get(url)
  browser.sleep(sleep_delay)
  await browser.findElement(by.xpath(xpath_first_photo)).click()
}


let browser = new Webdriver
  .Builder()
  .withCapabilities(Webdriver.Capabilities.chrome())
  .build()

// let test = async () => {
//   let url = "https://google.com"
//   let button = "/html/body[@id='gsr']/div[@id='viewport']/div[@id='searchform']/form[@id='tsf']/div[@class='tsf-p']/div[@class='jsb']/center/input[1]"
//   await browser.get(url)
//   browser.sleep(sleep_delay)
//   await browser.findElement(by.xpath(button)).click()



// }


let main = async () => {
  await login()
  // browser.sleep(sleep_delay)
  // await getPhoto()
  // await like()
  // await test()
  browser.sleep(sleep_delay)
  browser.sleep(sleep_delay)


  let url = "https://www.instagram.com/p/BVZ8sd_Dsnq/?taken-by=proletarskaja39"
  // let xpath_like = "/html[@class='js logged-in ']/body/div[2]/div[@class='_a1rcs _ea084']/div[@class='_g1ax7']/div[@class='_n3cp9 _d20no']/article[@class='_j5hrx _4xyiw _nf2ta']/header[@class='_2ircu _s6yvg']/span[@class='_q2efk _7k49n']/button[@class='_ah57t _84y62 _i46jh _rmr7s']"

  await browser.get(url)
  browser.sleep(sleep_delay)


  // await browser.findElement(by.xpath(xpath_like)).click()
  //linkText: 'Bites'
  await browser.findElement({ js: "return document.getElementsByTagName('button')[0]" }).click()


// document.getElementsByTagName('button')[0]

// _ah57t _84y62 _i46jh _rmr7s


}

main()
// logger.info('Everything is done. Finishing...')
// browser.quit()
