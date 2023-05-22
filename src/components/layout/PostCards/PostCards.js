import { Link } from 'react-router-dom';
import styles from './PostCards.module.css'

function PostCards({id, img, title, body, buttonTitle}) {
    function reduceBody(body) {
        return body.slice(0, 150) + "...";
    }

    return (
        <div className={styles.postCardsItem}>
            <img src={img} alt={title}/>
            <div className={styles.postCardContent}>
                <h3>{title}</h3>
                <p>{reduceBody(body)}</p>
                <div className={styles.postCardsActions}>
                    <Link className={styles.btn} to={`/post/${id}`}>{buttonTitle}</Link>
                </div>
            </div>
        </div>
    );
}

export default PostCards