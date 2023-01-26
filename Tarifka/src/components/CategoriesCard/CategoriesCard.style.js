import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'orange',
    },
    inner_container: {
        borderTopLeftRadius : 50,
        borderBottomLeftRadius : 50,
        margin: 10,
        backgroundColor : 'white',
        flexDirection : 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius : 50,
        marginLeft : 10,
    },
    title_container:{
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
    },
    category_name:{
        textAlign: 'center',
        color : 'black',
        justifyContent : 'center',
        alignContent : 'center',
        fontSize : 20,
    }
})