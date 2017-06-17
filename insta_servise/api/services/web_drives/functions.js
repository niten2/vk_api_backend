import Setting from "config/settings"
import Webdriver from "selenium-webdriver"

const by = Webdriver.By
const sleep_delay = 500

// import log4js from "log4js"
// const smart_like_mode = true
// const like_depth_per_user = 5
// const logger = log4js.getLogger('instabot')
// log4js.loadAppender('file')
// log4js.addAppender(log4js.appenders.file('instabot.log'), 'instabot')
// logger.setLevel('DEBUG')

const instagram_accounts_to_be_liked = "xenia_sobchak"

const XPATH_FIRST_PHOTO = '//header/../div/div/div[1]/a[1]'
const XPATH_NEXTPREV_BUTTONS = '//div[@id="fb-root"]/following-sibling::div[1]/div/div/div/div/*'

export const initBrowser = () => {
  let driver = new Webdriver
    .Builder()
    .withCapabilities(Webdriver.Capabilities.chrome())
    .build()

  driver.manage().timeouts().implicitlyWait(5)

  return driver
}

export const auth = async (browser) => {
  let URL_LOGIN = 'https://www.instagram.com/accounts/login/'
  browser.manage().window().setSize(1024, 700)
  await browser.get(URL_LOGIN)
  await browser.findElement(by.name('username')).sendKeys(Setting.insta.username)
  await browser.findElement(by.name('password')).sendKeys(Setting.insta.password)
  await browser.findElement(by.xpath('//button')).click()
  await browser.sleep(sleep_delay)

  // await browser.get("https://www.instagram.com/explore/")
  // browser.sleep(sleep_delay)
}

// export const like = async () => {
//   await browser.findElement(by.xpath(xpath_like)).click()
// }

// export const getFirstPhoto = async (browser) => {
//   let url = 'https://instagram.com/' + instagram_accounts_to_be_liked
//   logger.info('Doing likes for: ' + instagram_accounts_to_be_liked)

//   await browser.get(url)
//   browser.sleep(sleep_delay)
//   await browser.findElement(by.xpath(xpath_first_photo)).click()
// }


export let follow = async (browser, url) => {
  await browser.findElement({ js: "return document.getElementsByTagName('button')[0]" }).click()
}

export const followExplore = async (browser) => {
  const URL_EXPLORE = "https://www.instagram.com/explore/"

  await browser.get(URL_EXPLORE)
  await browser.sleep(sleep_delay)

  let links = await browser.findElements(by.tagName('button'))

  links.map( async (link) => {
      await browser.sleep(sleep_delay)
      await link.click()
  })
}


export const likeFollowers = async (browser) => {
  await browser.sleep(sleep_delay)

  let URL_USER = "https://www.instagram.com/niten2niten2"

  // let link_followers = by.tagName('a')[1]
  // "/niten2niten2/followers/"


  await browser.get(URL_USER)
  await browser.sleep(sleep_delay)

  let follow = await browser.findElements(by.tagName('a'))
  follow[1].click()

  await browser.sleep(sleep_delay)

  let follow_list = await browser.findElements(by.tagName('a'))
  // 30 - 79
  await follow_list[39].click()

  await browser.sleep(sleep_delay)

  await browser.findElement(by.xpath(XPATH_FIRST_PHOTO)).click()

  let test = await browser.findElement(by.tagName("a"))

  console.log(11111)
  test[18].click()
}



