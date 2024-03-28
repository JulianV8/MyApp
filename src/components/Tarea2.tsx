import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Tarea2 = () => {
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
        flex: 1,
        borderColor: 'red',
        borderWidth: 5,
        // justifyContent: 'center',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        width: 100,
        height: 100,
    },
    cajaAzulMarina: {
        backgroundColor: '#2BC4D9',
        borderWidth: 10,
        borderColor: 'white',
        height: 100,
    },
})