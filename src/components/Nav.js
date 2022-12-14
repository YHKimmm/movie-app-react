import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <header >
            <h1 className="logo" >
                <NavLink to="/"><FontAwesomeIcon icon={faFilm} size='2x' style={{ 'padding': '20px' }} /></NavLink>
            </h1>
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
        </header>
    );
}

export default Nav;