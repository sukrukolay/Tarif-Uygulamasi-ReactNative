import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './CategoriesCard.style'
const CategoriesCard = ({ category, onSelect }) => {

    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onSelect}>
                <View style={styles.inner_container}>
                    <Image
                        style={styles.image}
                        source={{ uri: category.strCategoryThumb }}
                    />
                    <View style={styles.title_container}>
                        <Text style={styles.category_name}>{category.strCategory}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default CategoriesCard