import styles from './Button.module.css'

function Button({url, title}) {
    return (
        <a className={styles.btn} href={url}>{title}</a>
    );
}

export default Button