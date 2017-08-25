import superagent from "superagent"
import settings from "lib/settings"

let FOLLOW_URL = `${settings.instaServise}/v1/web-drivers/follow-explore`
let LIKE_LENTA_URL = `${settings.instaServise}/v1/web-drivers/like-lenta`

export const requestLikeLenta = (params) => {
  return superagent
    .put(LIKE_LENTA_URL)
    .query(params)
}

export const requestFollowExplore = (params) => {
  return superagent
    .put(FOLLOW_URL)
    .query(params)
}


