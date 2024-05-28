import logo from '../assets/LOGO.svg';
import '../styles/NavBar.css';

function NavBar() {
	return (
		<div className='NavBar'>
			<img src={logo} alt='Kasa' className='kasa-logo' />
			<span className='navLinks'>
				<a className='kasa-nav'>Accueil</a> <a className='kasa-nav'>A propos</a>
			</span>
		</div>
	);
}

export default NavBar;
