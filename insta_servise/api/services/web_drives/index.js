import {
  initBrowser,
  auth,
  followExplore,
  likeFollowers,
} from "./actions"

const sleep_delay = 500

export const main = async (options = {}) => {
  let { quit } = options

  let browser = await initBrowser()

  // await auth(browser)
  // await followExplore(browser)
  // await likeFollowers(browser)

  let url = "http://google.com"

  await browser.get(url)

  // console.log(quit)

  if (quit == true) {
    await browser.sleep(sleep_delay)
    await browser.quit()
  }
}
