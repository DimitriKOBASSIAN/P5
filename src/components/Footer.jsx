import LogoBW from '../assets/LOGO-BW.svg';
import '../styles/Footer.scss';

function Footer() {
    return (
        <div className='Footer'>
            <img src={LogoBW} alt='Kasa' className='kasa-logo-bw' />
            <div className='disclaimer'>
                <p className='kasa-footer'>© 2024 Kasa. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;