const axios = require("axios")


exports.getProfileInfo = async (username) => {
    // console.log(process.env.REACT_APP_DEFAULT_API_PORT)
    const url = process.env.REACT_APP_DEFAULT_API_URL
    const port = process.env.REACT_APP_DEFAULT_API_PORT
    const endpoint = `${url}${port}/profile?username=${username}`

    console.log(endpoint)

    try{
        const response = await axios.get(endpoint).catch()
        return response.data.user[0]
    }
    catch(err){
        console.log(err)
        return null
    }
}