import {
  initBrowser,
  auth,
  followExplore,
  likeFollowers,
  haveQuit,
  sleep_delay,
  likeLenta,
} from "./actions"

export const runFollowExplore = async (options = {}) => {
  console.log("run runFollowExplore")
  let browser = await initBrowser()
  await auth(browser)
  await followExplore(browser)
  await haveQuit(browser, options)
}

export const runlikeLenta = async (options = {}) => {
  console.log("run runlikeLenta")
  let browser = await initBrowser()
  await auth(browser)
  await likeLenta(browser)
  await haveQuit(browser, options)
}
