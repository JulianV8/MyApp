import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ObjectBoxModelScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzulMarina}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 5,
    height: '100%',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: '15%',
    top: 0
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: '70%',
  },
  cajaAzulMarina: {
    backgroundColor: '#2BC4D9',
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: '15%',
  },
})