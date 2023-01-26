import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 4,
        resizeMode: 'cover',
        borderRadius: 20,
        margin: 5,
        padding: 5,
    },
    food_title: {
        color: '#f5184c',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
    food_description: {
        fontSize: 15,
        padding: 10,
        margin: 10,
        color: 'black',

    },
    bottomLine: {
        backgroundColor: 'darkgrey',
        width: '100%',
        height: 2,
    },
    food_country: {
        color: '#f5184c',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: 'red',
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,

    },
})