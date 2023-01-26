import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
// import axios from 'axios'
import Loading from '../../components/Loading'
import FoodsCard from '../../components/FoodsCard'

import useFetchHook from '../../Hooks/useFetch'


const Food = ({ route, navigation }) => {
    const categoryName = route.params.categoryName

    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)


    // useEffect(() => {
    //     fetchData()
    // }, [])


    // const fetchData = async () => {
    //     const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categoryName)
    //     setData(data.meals)
    //     setLoading(false)
    // }

    const { loading, data } = useFetchHook(' https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categoryName)


    const pressedFood = (strMeal) => {
        navigation.navigate('foodDetailScreen', { foodTitle: strMeal })
    }

    const renderFood = ({ item }) => <FoodsCard foods={item} onSelect={() => { pressedFood(item.strMeal) }} />

    if (loading) {
        return <Loading />
    }
    return (
        <FlatList
            data={data.meals}
            renderItem={renderFood}
            keyExtractor={item => item.idMeal}
        />
    )
}
export default Food