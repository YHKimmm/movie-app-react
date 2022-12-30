import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function Nav() {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>
                <NavLink to='/'>
                    <img src={`${imageFolderPath}logo.jpg`} alt='logo' className={styles.logo} />
                </NavLink>
                <NavLink to='/'>MegaBox</NavLink>
            </h1>
            <MobileNavigation style={{ 'padding': '20px' }} />
            <Navigation />

        </div>
    );
}

export default Nav;