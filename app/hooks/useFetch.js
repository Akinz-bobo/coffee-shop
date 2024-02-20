import { ApiManager } from "../api/ApiManager"

const getShops = async () => {
  try {
    const results = await ApiManager.get("/shops")
    return results.data
  } catch (error) {
    console.log(error)
  }
}
const getOrigins = async () => {
  try {
    const results = await ApiManager.get("/coffeebeans")
    return results
  } catch (error) {
    console.log(error)
  }
}

const useFetch = () => {
  return {
    getShops,
    getOrigins,
  }
}

export default useFetch
