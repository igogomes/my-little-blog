import styles from './Footer.module.css'

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
    const currentDay = new Date();
    let currentYear = currentDay.getFullYear();

    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <div className={styles.copyright}><span>My Little Blog</span> &copy; {currentYear}</div>
        </footer>
    );
}

export default Footer