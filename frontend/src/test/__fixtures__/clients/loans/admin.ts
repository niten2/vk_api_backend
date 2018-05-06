import Component from 'src/components/clients/loans'

export default {
  component: Component,
  url: '/url',

  localStorage: {
    credit_site_frontend: "foobar-token",
    credit_site_frontend_role: "admin",
  },

  props: {
    match: {
      params: {
        id: "507f1f77bcf86cd799439011",
      }
    },
  },
}
