import Login from 'src/components/login'

export default {
  component: Login,
  url: "/url",

  props: {
    history: {
      push: (arg) => {
        console.log("history push", arg)
      }
    },
  },
}
