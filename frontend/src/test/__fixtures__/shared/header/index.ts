import Header from 'src/components/shared/header'

export default {
  component: Header,
  url: '/header',

  props: {
    history: {
      push: (arg) => { return arg }
    },
  },
}
