import Button from '../Button/Button';
import styles from './PostCards.module.css'

function PostCards({img, title, buttonTitle}) {
    const regenerateTitle = title.toLowerCase().replace(/\s/g, '-');

    return (
        <div className={styles.postCardsItem}>
            <img src={img} alt={title}/>
            <div className={styles.postCardContent}>
                <h3>{title}</h3>
                <Button url={regenerateTitle} title={buttonTitle}/>
            </div>
        </div>
    );
}

export default PostCards