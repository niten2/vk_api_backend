import Component from 'src/components/clients/new'

export default {
  component: Component,
  url: '/url',

  props: {
    history: {
      push: (arg) => {
        console.log("history push", arg)
      }
    },
  },
}
