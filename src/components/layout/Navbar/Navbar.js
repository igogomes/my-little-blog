import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import Container from '../Container/Container';
import logo from '../../../img/my-little-blog-logo.svg'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="My Little Blog"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/trending">Em Alta</Link></li>
                    <li className={styles.item}><Link to="/posts">Posts</Link></li>
                    <li className={styles.item}><Link to="/about">Sobre</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar