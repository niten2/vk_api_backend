import superagent from "superagent"

let FOLLOW_URL = `${INSTA_SERVISE}/v1/web-drivers/follow-explore`

export const requestFollowExplore = (params) => {
  return superagent
    .put(FOLLOW_URL)
    .query(params)
}


