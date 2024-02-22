import axios from "axios"

// export const api_base_url = __DEV__ ? "http://localhost:3000" :
export const api_base_url = "https://coffee-shop-backend-hbss.onrender.com"


export const request = axios.create({
    baseURL:api_base_url,
})