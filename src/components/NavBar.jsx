import { NavLink } from "react-router-dom";
import "../styles/NavBar.scss";
import logoRed from "../assets/LOGO.svg";

const handleNavLinkClick = (event) => {
	const links = document.querySelectorAll(".NavBar ul li a");
	links.forEach((link) => {
		link.classList.remove("NavBar--active");
	});
	event.target.classList.add("NavBar--active");
};


const NavBar = () => {
return (
<header>
	<nav className="NavBar">
	<NavLink to="/" className="Logo">
		<img src={logoRed} alt="Logo du site Kasa" />
	</NavLink>
	<ul>
		<li>
		<a href="/">
			Accueil
		</a>
		</li>
		<li>
		<a href="/about">
			A Propos
		</a>
		</li>
	</ul>
	</nav>
</header>
);
};

export default NavBar;