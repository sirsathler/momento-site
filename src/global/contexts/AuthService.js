import axios from 'axios';

import { PostAPIEndpoint } from '../services/api';

const submitLoginCredentials = async (payload) => {
    try{
        const response = await PostAPIEndpoint("/login", payload)
        return response
    }
    catch(err){
        return err
    }
}

const isTokenValid = async (token) => {
    
}

export default submitLoginCredentials