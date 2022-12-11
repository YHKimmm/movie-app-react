import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favorite">Favorite</NavLink>
                </li>
                <li>
                    <NavLink to="/watch-later">Watch Later</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;