import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import FoodDetailCard from '../../components/FoodsDetailCard'
// import axios from 'axios'

import useFetchHook from '../../Hooks/useFetch'

const FoodDetail = ({ route }) => {
    const strMeal = route.params.foodTitle


    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)


    // useEffect(() => {
    //     fetchData()
    // }, [])


    // const fetchData = async () => {
    //     const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + strMeal)
    //     setData(data)
    //     setLoading(false)
    // }

    const { loading, data } = useFetchHook(' https://www.themealdb.com/api/json/v1/1/search.php?s=' + strMeal )

    if (loading) {
        return <ActivityIndicator size="large" color="orange" />
    }
    return (
        <View>
            <FoodDetailCard
                title={strMeal}
                image={data.meals[0].strMealThumb}
                description={data.meals[0].strInstructions}
                country={data.meals[0].strArea}
                youtubeLink={data.meals[0].strYoutube}
            />
        </View>
    )
}
export default FoodDetail