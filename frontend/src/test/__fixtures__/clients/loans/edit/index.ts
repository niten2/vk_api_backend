import Component from 'src/components/clients/loans/edit'

export default {
  component: Component,
  url: "/url",

  props: {
    match: {
      params: {
        id: "507f1f77bcf86cd799439011",
        loanId: "507f1f77bcf86cd799439011",
      }
    },

    history: {
      push: (arg) => {
        console.log("history push", arg)
      }
    },
  },
}
