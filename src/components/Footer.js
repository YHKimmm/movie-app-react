import { getYear } from "../utilities/getDates";

function Footer({ copyright, author }) {
    return (
        <footer>
            <p>&copy; {copyright} {author}</p>
        </footer>
    );
}

Footer.defaultProps = {
    author: 'Brayden',
    copyright: getYear()
}

export default Footer;