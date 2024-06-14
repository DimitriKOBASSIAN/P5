import '../styles/Banner.scss';

function Banner( { isAboutPage } ) {
    const className = isAboutPage ? 'Banner about-page' : 'Banner';
    /* adding a className about-page if the user is on the about page. */
    return (
        <div className={className}>
            <p className='Banner--title'>
                <span className="part1"> Chez vous, </span><span className="part2">partout et ailleurs</span>
            </p>
        </div>
    );
}

export default Banner;