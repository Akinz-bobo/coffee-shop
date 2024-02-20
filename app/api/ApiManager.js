import axios from "axios"

export const ApiManager = axios.create({
  baseURL: "https://coffee-shop-backend-hbss.onrender.com",
})
