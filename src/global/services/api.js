import axios from "axios";

const APIBaseURL = process.env.REACT_APP_DEFAULT_API_URL
const APIBasePORT = process.env.REACT_APP_DEFAULT_API_PORT

export const API = axios.create({
    baseURL: `${APIBaseURL}${APIBasePORT}`
})

export const PostAPIEndpoint = async (route, payload) => {
    const response = API.post(route, payload)
    return response
}