import axios from "axios";


const APIBaseURL = process.env.REACT_APP_DEFAULT_API_URL
const APIBasePORT = process.env.REACT_APP_DEFAULT_API_PORT


export const API = axios.create({
    baseURL: `${APIBaseURL}${APIBasePORT}`
})

axios.interceptors.response.use(response => response, error => {

    switch(error.response.status){
        case 403 || 401:
            
    }
})

export const PostAPIEndpoint = async (route, payload) => {
    const response = API.post(route, payload)
    return response
}

export const GetAPIEndpoint = async (route, payload) => {
    const response = API.get(`${route}/${payload}`)
    return response
}