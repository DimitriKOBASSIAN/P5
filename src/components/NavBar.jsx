import { NavLink } from "react-router-dom";
import "../styles/NavBar.scss";
import logoRed from "../assets/LOGO.svg";

const NavBar = () => {
    return (
        <header>
            <nav className="NavBar">
                <NavLink to="/" >
                    <img className="NavBar--logo" src={logoRed} alt="Logo du site Kasa" />
                </NavLink>
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? "NavBar--active" : ""}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => isActive ? "NavBar--active" : ""}
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;