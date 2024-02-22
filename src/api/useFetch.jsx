import { useEffect, useState } from 'react'

const useFetch = (url,options ={}) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    async function fetchData(){
        try{
            setLoading(true)
            const response = await fetch(url,options)
            if(!response.ok){
                throw new Error(response.statusText)
            }
            const data = await response.json()
            setLoading(false)
            setData(()=>data)
        }catch(error){
            setError(()=>error)
            setLoading(false)
        }
    }
    useEffect(function(){
        fetchData()
    },[url])
  return {loading,data,error}
}

export default useFetch