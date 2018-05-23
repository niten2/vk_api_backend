import SignIn from 'src/components/auth/sign_in'

export default {
  component: SignIn,
  url: "/url",

  props: {
    history: {
      push: (arg) => {
        console.log("history push", arg)
      }
    },
  },
}
