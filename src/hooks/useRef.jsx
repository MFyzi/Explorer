import { useState,useEffect } from "react"
import { API_KEY, baseURL } from '../constants'
import axios from "../axios"

const useFetch = (n,search,subSearch) =>{
    
    const [fetch, setFetch] = useState([])
    const fetchVideos =(n,search,subSearch)=>{
        axios.get(`${baseURL}?key=${API_KEY}&q=${search}+${subSearch}`).then((response)=>{
            for(let i=2;i<n+2;i++){
                setFetch(prevStete => [...prevStete,response.data.hits[i]])
            }
        }).catch(err=>{
            alert('network refresh')
        })    
    } 
    useEffect(() => {
        fetchVideos(n,search,subSearch)
        console.log("hai")
    }, [])
    // console.log(ref)
    
    return {fetch}
}

export default useFetch