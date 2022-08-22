import CSS from './profile.scss'

export default function Profile() {
    return (
        <div className="page page-profile">

            <div className="user-profile-image-container">
                <img className="user-profile-image-container__image" src="https://i.imgur.com/DO5XhAm.png" alt="user-image" />
            </div>

            <div className="user-profile-info-container">
                <p className='user-profile-info-container__username forte-font'>@dougcastelano</p>
                <p className='user-profile-info-container__name forte-font'>Doug Castelano</p>
            </div>

            <div className="user-profile-stats-container">
                <div className="user-profile-stats-wrapper">
                    <p className='user-profile-stats-wrapper__value'>32</p>
                    <p className='user-profile-stats-wrapper__label'>seguidores</p>
                </div>
                <div className="user-profile-stats-wrapper">
                    <p className='user-profile-stats-wrapper__value'>32</p>
                    <p className='user-profile-stats-wrapper__label'>likes</p>
                </div>
                <div className="user-profile-stats-wrapper">
                    <p className='user-profile-stats-wrapper__value'>32</p>
                    <p className='user-profile-stats-wrapper__label'>momentos</p>
                </div>
            </div>

            <div className="user-profile-collage-container">
                <h2 className='user-profile-collage-container__title forte-font'>Collage</h2>

                <div className="user-collage">
                    <div className="user-collage__collageImage user-collage__image1"></div>
                    <div className="user-collage__collageImage user-collage__image2"></div>
                    <div className="user-collage__collageImage user-collage__image3"></div>
                    <div className="user-collage__collageImage user-collage__image4"></div>
                    <div className="user-collage__collageImage user-collage__image5"></div>
                </div>
            </div>
        </div>
    )
}