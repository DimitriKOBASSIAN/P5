import Coast from '../assets/Coast.png';
import '../styles/Adhook.scss';

function Adhook( { isAboutPage } ) {
    const className = isAboutPage ? 'Adhook about-page' : 'Adhook';
    
    return (
        <div className={className}>
            <p className='Adhook--title'>
                Chez vous, <span>partout et ailleurs</span>
            </p>
        </div>
    );
}

export default Adhook;