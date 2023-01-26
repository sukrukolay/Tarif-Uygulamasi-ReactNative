import React, { useState, useEffect } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
// import axios from 'axios'
import CategoriesCard from '../../components/CategoriesCard'

import useFetchHook from '../../Hooks/useFetch'

const Categories = ({ navigation }) => {

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetchData()
    // }, [])


    // const fetchData = async () => {
    //     const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    //     setData(data.categories)
    //     setLoading(false)
    // }


    const { loading, data } = useFetchHook(' https://www.themealdb.com/api/json/v1/1/categories.php ')

    const pressedFood = (strCategory) => {
        navigation.navigate('foodScreen', { categoryName: strCategory })
    }


    const renderFood = ({ item }) => <CategoriesCard category={item} onSelect={() => { pressedFood(item.strCategory) }} />

    if (loading) {
        return <ActivityIndicator size="large" color="orange" />
    }
    return (
        <FlatList
            data={data.categories}
            renderItem={renderFood}
            keyExtractor={item => item.idCategory}
        />
    )
}
export default Categories