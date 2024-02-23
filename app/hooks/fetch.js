import { useEffect, useState,useMemo, useCallback } from "react"
import { request } from "../utils/constants"

export const useGetShops =()=>{
    const [shops,setShops] = useState([])
    const getShops = useCallback(async()=>{
        try{
            const gShops = await request.get("/shops");
            // console.log("Shops")
            // console.log({gShops})
            setShops(gShops.data);
        }catch(e){
            console.log(e.message||"an error occured while getting shops")
        }
    },[])
    useEffect(()=>{
        (async()=>await getShops())()
    },[])
    return {shops,getShops}
}
export const useGetOrigin =()=>{
    const [origin,setorigin] = useState([])
    const getorigin = useCallback(async()=>{
        try{
            const gorigin = await request.get("/coffeebeans")
            // console.log(gShops.data[0].cover_image[0])
            setorigin(gorigin.data)
        }catch(e){
            console.log(e.message||"an error occured while getting shops")
        }
    },[])
    useEffect(()=>{
        getorigin()
        
    },[])
    return {origin,getorigin}
}