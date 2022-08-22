import './stats.scss'
export default function Stats(props) {
    console.log(props)

    return (
        <div className="user-profile-stats-container">
            <div className="user-profile-stats-wrapper">
                <p className='user-profile-stats-wrapper__value'>{props.user.followers}</p>
                <p className='user-profile-stats-wrapper__label'>seguidores</p>
            </div>
            <div className="user-profile-stats-wrapper">
                <p className='user-profile-stats-wrapper__value'>{props.user.likes}</p>
                <p className='user-profile-stats-wrapper__label'>likes</p>
            </div>
            <div className="user-profile-stats-wrapper">
                <p className='user-profile-stats-wrapper__value'>{props.user.momentos}</p>
                <p className='user-profile-stats-wrapper__label'>momentos</p>
            </div>
        </div>
    )
}