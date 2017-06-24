import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Test from './components/button.js'
// import Fetch from './components/fetch.js'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

export default class App extends React.Component {


  render() {
    return (
      <View>
        <Text>index</Text>

        <Test />

      </View>
    )
  }


}

