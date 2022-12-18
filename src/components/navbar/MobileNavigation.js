import NavLinks from "./NavLinks";
import styles from './Nav.module.css';
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

function MobileNavigation() {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className={styles.hamburger} size='50px' color='white'
        onClick={() => setOpen(!open)} />

    const closeIcon = <CgCloseO className={styles.closeIcon} size='50px' color='white'
        onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => {
        setOpen(false);
    }

    return (
        <nav className={styles.mobile__navigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation;