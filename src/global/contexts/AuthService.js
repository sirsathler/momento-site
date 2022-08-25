import axios from 'axios';

import { API, PostAPIEndpoint } from '../services/api';

const submitLoginCredentials = async (payload) => {
    try{
        const response = PostAPIEndpoint("/login", payload)
        console.log(response)
        return response
    }
    catch(err){
        return err
    }
}

const isTokenValid = async (token) => {
    
}

export default submitLoginCredentials