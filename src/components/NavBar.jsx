import logo from '../assets/LOGO.svg';
import '../styles/NavBar.scss';

function NavBar() {
	return (
		<div className='NavBar'>
			<img src={logo} className='NavBar--logo' alt='Kasa'/>
			<span className='NavBar--links'>
				<a className='NavBar--nav'>Accueil</a> <a className='NavBar--nav'>A Propos</a>
			</span>
		</div>
	);
}

export default NavBar;
