import axios from "axios";
import { useNavigate } from 'react-router-dom';


const APIBaseURL = process.env.REACT_APP_DEFAULT_API_URL
const APIBasePORT = process.env.REACT_APP_DEFAULT_API_PORT



export const API = axios.create({
    baseURL: `${APIBaseURL}${APIBasePORT}`
})

API.interceptors.response.use(response => response, error => {
    const Navigate = useNavigate()

    switch(error.response.status){
        case 403 || 401:
            <Navigate to="/login"/>
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