import { Link } from 'react-router-dom';
import styles from './PostCards.module.css'

function PostCards({id, img, title, buttonTitle}) {
    return (
        <div className={styles.postCardsItem}>
            <img src={img} alt={title}/>
            <div className={styles.postCardContent}>
                <h3>{title}</h3>
                <Link className={styles.btn} to="/article">{buttonTitle}</Link>
            </div>
        </div>
    );
}

export default PostCards