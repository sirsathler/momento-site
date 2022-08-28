const axios = require('axios')
const { API } = require('../../global/services/api')

exports.fetchFeed = async (token) => {
    const url = process.env.REACT_APP_DEFAULT_API_URL
    const port = process.env.REACT_APP_DEFAULT_API_PORT
    const endpoint = `${url}${port}/post?token=${token}`

    try {
        console.log(API.defaults.headers)
        const response = await axios.get(endpoint).catch()
        return response.data.posts
    }
    catch (err) {
        console.log(err)
        return null
    }
}