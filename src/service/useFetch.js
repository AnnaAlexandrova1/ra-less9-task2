import { useState, useEffect } from "react";

export default function useFetch(url, opts = null) {
    const [data, setDate] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        
        const fetchData = async () => {
            setLoading(true)

            try {
                const responce = await fetch(url)
                if (!responce.ok) {
                    throw new Error(`${responce.url}${responce.status} ${responce.statusText}`) }
                const data = await responce.json()
                setDate(data);
                setError(null)
            }
            catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        
    }, [url, opts])
    return [data, loading, error]
}