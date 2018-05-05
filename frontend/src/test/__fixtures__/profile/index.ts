import Profile from 'src/components/profile'

export default {
  component: Profile,
  url: "/url",

  props: {
    history: {
      push: (arg) => {
        console.log("history push", arg)
      }
    },
  },
}
