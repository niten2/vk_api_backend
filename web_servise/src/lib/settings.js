// import Settings from "lib/settings"

export default {
  // env: process.env.NODE_ENV,

  authServise: process.env.REACT_APP_AUTH_SERVISE,
  crmServise: process.env.REACT_APP_CRM_SERVISE,
  vkServise: process.env.REACT_APP_VK_SERVISE,
  instaServise: process.env.REACT_APP_INSTA_SERVISE,

  uriAuthServise: `${process.env.REACT_APP_AUTH_SERVISE}/v2`,
  uriCrmServise: `${process.env.REACT_APP_CRM_SERVISE}/v2`,
  uriVkServise: `${process.env.REACT_APP_VK_SERVISE}/v2`,
  uriInstaServise: `${process.env.REACT_APP_INSTA_SERVISE}/v2`,
}
