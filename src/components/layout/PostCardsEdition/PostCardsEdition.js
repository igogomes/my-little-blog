import styles from './PostCardsEdition.module.css'

import { Link } from 'react-router-dom'

function PostCardsEdition({id, img, title, body, handleRemove}) {
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    function reduceBody(body) {
        return body.slice(0, 150) + "...";
    }

    return (
        <div className={styles.postCardsEditionItem}>
            <img src={img} alt={title}/>
            <div className={styles.postCardsEditionContent}>
                <h3>{title}</h3>
                <p>{reduceBody(body)}</p>
                <div className={styles.postCardsEditionActions}>
                    <Link className={styles.btn} to={`/post/${id}`}>Editar</Link>
                    <button className={styles.btn} onClick={remove}>Excluir</button>
                </div>
            </div>
        </div>
    );
}

export default PostCardsEdition