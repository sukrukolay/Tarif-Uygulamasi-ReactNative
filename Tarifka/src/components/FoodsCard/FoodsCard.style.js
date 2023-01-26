import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    inner_container: {
        margin: 10,
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 4,
        resizeMode: 'cover',
        borderRadius: 20,
        margin: 5,
        padding: 5,

    },
    food_title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',


    },
    food_title_container: {
        backgroundColor: '#393d3a',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddign: 5,

    },
})