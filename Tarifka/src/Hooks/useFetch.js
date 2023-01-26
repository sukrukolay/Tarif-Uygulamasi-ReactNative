import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchHook = (url) => {console.log(url)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        const { data } = await axios.get(url)  // {data: responseData} // data yı parçalayıp responseData adını verdik
        setData(data)
        setLoading(false)

    }


    return { loading, data }
}

export default useFetchHook