import React from 'react'
import {StyleSheet, View} from 'react-native'

export const ExFour = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaAzul}></View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28425B'
    },
    cajaMorada:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#5856D1',
        alignSelf:'flex-end',
    },
    cajaNaranja:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#F0A23B',
        alignSelf:'center',
        position:'absolute',
        bottom:'50%'
    },
    cajaAzul:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#28C4D9',
        alignSelf:'flex-start',
        justifyContent:'flex-end',
        position:'absolute',
        bottom:0
    }
})