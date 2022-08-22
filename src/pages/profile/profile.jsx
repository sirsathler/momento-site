import { useEffect } from 'react';
import { React, useState } from 'react'
import CSS from './profile.scss'
import { getProfileInfo } from './profileService'

export default function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchProfileData(username) {
            const data = await getProfileInfo(username)
            setUser(data)
        }
        
        fetchProfileData('teste')
    }, [])

    return (
        <div className="page page-profile">
            <div className="user-profile-image-container">
                <img className="user-profile-image-container__image" src={user.profilepic} alt="user-image" />
            </div>

            <div className="user-profile-info-container">
                <p className='user-profile-info-container__username forte-font'>{`@${user.username}`}</p>
                <p className='user-profile-info-container__name forte-font'>{user.name} {user.surname}</p>
            </div>

            <div className="user-profile-stats-container">
                <div className="user-profile-stats-wrapper">
                    <p className='user-profile-stats-wrapper__value'>{user.followers}</p>
                    <p className='user-profile-stats-wrapper__label'>seguidores</p>
                </div>
                <div className="user-profile-stats-wrapper">
                    <p className='user-profile-stats-wrapper__value'>{user.likes}</p>
                    <p className='user-profile-stats-wrapper__label'>likes</p>
                </div>
                <div className="user-profile-stats-wrapper">
                    <p className='user-profile-stats-wrapper__value'>{user.momentos}</p>
                    <p className='user-profile-stats-wrapper__label'>momentos</p>
                </div>
            </div>

            <div className="user-profile-collage-container">
                <h2 className='user-profile-collage-container__title forte-font'>Collage</h2>

                <div className="user-collage">
                    <div className="user-collage__collageImage user-collage__image1" />
                    <div className="user-collage__collageImage user-collage__image2" />
                    <div className="user-collage__collageImage user-collage__image3" />
                    <div className="user-collage__collageImage user-collage__image4" />
                    <div className="user-collage__collageImage user-collage__image5" />
                </div>
            </div>
        </div>
    )
}