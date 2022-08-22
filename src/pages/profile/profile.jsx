import { useEffect } from 'react';
import { React, useState } from 'react'
import CSS from './profile.scss'
import { getProfileInfo } from './profileService'
import { useParams } from 'react-router-dom';

import Collage from './components/collage/collage'
import Stats from './components/stats/stats'
import Info from './components/info/info'
import Notfound from '../../global/pages/notfound/notfound';

export default function Profile() {
    const [user, setUser] = useState({});
    const { username } = useParams();

    useEffect(() => {
        async function fetchProfileData(username) {
            const data = await getProfileInfo(username)
            setUser(data)
        }

        fetchProfileData(username)
    }, [])

    console.log(user)
    if(!user){
        return (
            <Notfound/>
        )
    }
    return (
        <div className="page page-profile">
            <div className="user-profile-image-container">
                <img className="user-profile-image-container__image" src={user.profilepic} alt="user-image" />
            </div>
            <Info user={user}/>
            <Stats user={user} />
            <Collage user={user}/>
        </div>
    )
}