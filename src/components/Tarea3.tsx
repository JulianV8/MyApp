import React from 'react'
import { View, StyleSheet } from 'react-native';

export const Tarea3 = () => {
  return (
    <View style={styles.container}>
        <View style={ styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzulMarina}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 5,
        width: '100%',
        height: 300,
        position: 'absolute',
        top: 300,
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        alignItems: 'center',
        width: 100,
        height: 100,
        position: 'absolute',
        right: 0,
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        width: 100,
        height: 100,
        position: 'absolute',
        alignItems: 'center',
        left: 0,
        top:100,
    },
    cajaAzulMarina: {
        backgroundColor: '#2BC4D9',
        borderWidth: 10,
        borderColor: 'white',
        width: 100,
        height: 100,
        position: 'absolute',
        alignSelf: 'center',
        top: 200,
    },
})