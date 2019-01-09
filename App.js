import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  state = {
    display: 'display',
    result: 'result',
  }
  render() {
    const { display, result } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{display}</Text>
        <Text style={styles.result}>{result}</Text>
        <View style={styles.buttons}>
          <View style={styles.col1} />
          <View style={styles.col2} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    backgroundColor: '#efefef',
    fontSize: 60,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 10,
  },
  result: {
    flex: 0.4,
    backgroundColor: '#efefef',
    fontSize: 30,
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 5,
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
  },
  col1: {
    flex: 3,
    backgroundColor: 'green',
  },
  col2: {
    flex: 1,
    backgroundColor: 'red',
  },
})
