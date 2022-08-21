import CSS from './post.scss'
import MoreButton from '@mui/icons-material/MoreHoriz';
import LikeButton from '@mui/icons-material/Favorite';
// import postImg from ''


export default function Post() {
    return (
        <div className="post-container">
            <div className="post-header-container">
                <div className="user-image-container">
                    <img className="user-image-container__image" src="" alt="" />
                </div>
                <div className="post-user-info">
                    <p className='post-user-info__username forte-font'>@dougcastelano</p>
                    <p className='post-user-info__timeleft forte-font'>12 minutos restantes</p>
                </div>
            </div>
            <span className='post-container__options'><MoreButton sx={{ fontSize: 40 }} /></span>
            <div className="post-img-container">
                <img className='post-img-container__image' src='https://i.pinimg.com/736x/9a/72/ca/9a72caecd766a6818dcad9118bf9446b.jpg' alt="postimg" />
            </div>

            <div className="post-footer-container">
                <LikeButton className="post-footer-container__like-button" sx={{ fontSize: 70 }} />
            </div>
        </div>
    )
}