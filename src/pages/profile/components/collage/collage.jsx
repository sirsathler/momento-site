import './collage.scss'
import { React } from 'react'

export default function Collage(props) {
    return (
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
    )
}