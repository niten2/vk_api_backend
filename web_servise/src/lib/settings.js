// import Settings from "lib/settings"

export default {
  // env: process.env.NODE_ENV,

  auth_servise: process.env.REACT_APP_AUTH_SERVISE,
  crm_servise: process.env.REACT_APP_CRM_SERVISE,
  vk_servise: process.env.REACT_APP_VK_SERVISE,
  insta_servise: process.env.REACT_APP_INSTA_SERVISE,

  graphqlUriCrmServise: `${process.env.REACT_APP_CRM_SERVISE}/v2`,

  graphqlUriAuthServise: `${process.env.REACT_APP_AUTH_SERVISE}/v2`,
}
