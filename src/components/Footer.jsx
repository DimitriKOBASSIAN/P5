import LogoBW from '../assets/LOGO-BW.svg';
import '../styles/Footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <img src={LogoBW} className='footer--logo' alt='Kasa Logo'/>
            <div className='disclaimer'>
                <p className='footer--text'>© 2024 Kasa. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;