import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try{
            setLoading(true)
            const res = await fetch(url)
            const resData = await res.json()
            if(res.status !== 200){
                setError(resData)
                setLoading(false)
            }
            else{
                setData(resData)
                setLoading(false)
            }
            
        } catch (err){
            setLoading(false)
            setError(err)
        }
       
    }

    useEffect(() => {
        fetchData()
    }, [url])


  return [loading, data, error]
}

export default useFetch