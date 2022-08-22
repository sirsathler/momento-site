import './info.scss'

export default function Info(props) {
    return (
        <div className="user-profile-info-container">
            <p className='user-profile-info-container__username forte-font'>{`@${props.user.username}`}</p>
            <p className='user-profile-info-container__name forte-font'>{props.user.name} {props.user.surname}</p>
        </div>
    )
}