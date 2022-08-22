const { axios } = require("axios")
require('dotenv').config()


exports.getProfileInfo = async (username) => {
    console.log(process.env)
    return {
        "_id": "6303b7bc4231da25c0d14577",
        "username": "sirsathler",
        "password": "batata",
        "name": "Matheus",
        "surname": "Sathler",
        "profilepic": "https://imgur.com/ax98YzW.png",
        "profilecover": "https://imgur.com/qb2S2mU.png",
        "collage": [
            "https://imgur.com/bOD58pE.png",
            "https://imgur.com/6aMb5b9.png",
            "https://imgur.com/6aMb5b9.png",
            "https://imgur.com/6aMb5b9.png",
            "https://imgur.com/6aMb5b9.png"
        ],
        "bio": "O seu momento!",
        "followers": [],
        "momentos": [],
        "__v": 0

    }
}