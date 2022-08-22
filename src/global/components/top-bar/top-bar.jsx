import TrendingIcon from '@mui/icons-material/WhatshotOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ProfileIcon from '@mui/icons-material/Person';

import CSS from './top-bar.scss'

export default function TopBar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-inner">
                <ul className='navbar-section '>
                    <li><NotificationsIcon className='navbar-section__button' sx={{ fontSize: '2.4em' }} /></li>
                </ul>

                <h1 className='navbar-title primary-color forte-font'>momento</h1>

                <ul className='navbar-section navbar-section--end'>
                    <li><TrendingIcon className='navbar-section__button' sx={{ fontSize: '2.4em' }} /></li>
                    <li><SearchIcon className='navbar-section__button' sx={{ fontSize: '2.4em' }} /></li>
                    <li><ProfileIcon className='navbar-section__button' sx={{ fontSize: '2.4em' }} /></li>
                </ul>
            </div>
        </nav>
    )
}