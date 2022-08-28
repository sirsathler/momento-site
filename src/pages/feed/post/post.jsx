import CSS from './post.scss'
import MoreButton from '@mui/icons-material/MoreHoriz';
import LikeButton from '@mui/icons-material/Favorite';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';
// import postImg from ''

function millisConverter(millis) {
    var hours = Math.floor(millis / 3600000);
    var minutes = Math.floor(millis / 60000);

    const minutesLeft = {
        hours: hours,
        minutes: minutes
    }
    return minutesLeft
}


export default function Post(props) {
    const [timeLeft, setTimeLeft] = useState()
    const post = props.post

    useEffect(()=> {
        let expiration = moment(post.expiration);
        var timeleft = moment.duration(moment(expiration).diff(moment()))
        // console.log(postMoment.add(4, 'd'))
    
        const timeLeftMessage = timeleft._data.hours < 1 ? `${timeleft._data.minutes} minutos restantes` : `${timeleft._data.hours} horas e ${timeleft._data.minutes} minutos restantes`
        setTimeLeft(timeLeftMessage)
    }, [])

    return (
        <div className="post-container">
            <div className="post-header-container">
                <div className="user-image-container">
                    <img className="user-image-container__image" src="" alt="" />
                </div>
                <div className="post-user-info">
                    <p className='post-user-info__username forte-font'>{post.user.username}</p>
                    <p className='post-user-info__timeleft forte-font'>{timeLeft}</p>
                </div>
            </div>
            <span className='post-container__options'><MoreButton sx={{ fontSize: 40 }} /></span>
            <div className="post-img-container">
                <img className='post-img-container__image' src={post.postImgURL} alt="postimg" />
            </div>

            <div className="post-footer-container">
                <LikeButton className="post-footer-container__like-button" sx={{ fontSize: 70 }} />
            </div>
        </div>
    )
}