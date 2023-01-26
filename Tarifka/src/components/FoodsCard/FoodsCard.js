import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './FoodsCard.style'
const FoodsCard = ({ foods, navigation, onSelect }) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onSelect} >
                <View style={styles.inner_container}>
                    <Image
                        style={styles.image}
                        source={{ uri: foods.strMealThumb }}
                    />

                    <View style={styles.food_title_container}>
                        <Text style={styles.food_title}>{foods.strMeal}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default FoodsCard