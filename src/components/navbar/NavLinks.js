import { NavLink } from "react-router-dom";

function NavLinks({ closeMobileMenu }) {
    return (
        <ul>
            <li onClick={closeMobileMenu}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={closeMobileMenu}>
                <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={closeMobileMenu}>
                <NavLink to="/favorite">Favorite</NavLink>
            </li>
            <li onClick={closeMobileMenu}>
                <NavLink to="/watch-later">Watch Later</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;