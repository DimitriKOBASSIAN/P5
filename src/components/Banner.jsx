import Coast from '../assets/Coast.png';
import '../styles/Banner.scss';

function Banner( { isAboutPage } ) {
    const className = isAboutPage ? 'Banner about-page' : 'Banner';
    
    return (
        <div className={className}>
            <p className='Banner--title'>
                Chez vous, <span>partout et ailleurs</span>
            </p>
        </div>
    );
}

export default Banner;