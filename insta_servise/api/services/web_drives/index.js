import {
  initBrowser,
  auth,
  followExplore,
  likeFollowers,
} from "./functions"

let main = async (quit) => {

  let browser = await initBrowser()

  // await auth(browser)
  // await followExplore(browser)
  // await likeFollowers(browser)

  let url = "http://google.com"

  await browser.get(url)

  if (quit == true) { await browser.quit() }
}
