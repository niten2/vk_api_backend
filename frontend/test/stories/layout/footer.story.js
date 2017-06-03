import React from 'react'
import Footer from 'layout/footer'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Footer', module)
    .add('defalut', () => {
      return <Footer />
    })
}

