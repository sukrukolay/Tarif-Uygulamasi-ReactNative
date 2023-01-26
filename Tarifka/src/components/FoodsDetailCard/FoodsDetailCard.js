import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import styles from './FoodsDetailCard.style'
const FoodsDetailCard = ({ title, image, description, country, youtubeLink }) => {
    return (
        <ScrollView>
            <Image
                style={styles.image}
                source={{ uri: image }}
            />
            <Text style={styles.food_title}>{title}</Text>
            <Text style={styles.food_country}>{country}</Text>
            <View style={styles.bottomLine}></View>
            <Text style={styles.food_description}>{description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(youtubeLink)} style={styles.button}>
                <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default FoodsDetailCard