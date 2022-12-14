import { NavLink } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function Nav() {
    return (
        <header>
            <h1 className="logo" >
                <NavLink to="/"><img src={`${imageFolderPath}logo.jpg`} alt="Logo" /></NavLink>
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