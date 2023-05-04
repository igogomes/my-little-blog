import { Link } from 'react-router-dom';
import styles from './Button.module.css'

function Button({url, title}) {
    return (
        <Link to={url} className={styles.btn}>{title}</Link>
    );
}

export default Button