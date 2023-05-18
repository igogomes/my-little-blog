import styles from './Loading.module.css'

import loading from '../../../img/loading.svg'

function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <img className={styles.loadingIcon} src={loading} alt="Loading"/>
        </div>
    );
}

export default Loading