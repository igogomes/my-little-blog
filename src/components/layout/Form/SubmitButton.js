import { Link } from 'react-router-dom';
import styles from './SubmitButton.module.css'

function SubmitButton({ text, direction }) {
    return (
        <Link className={styles.btn} to={direction}>
            {text}
        </Link>
    );
}

export default SubmitButton 