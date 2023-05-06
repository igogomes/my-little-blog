import styles from './TextArea.module.css'

function TextArea({ name, label, placeholder, rows, columns }) {
    return(
        <div className={styles.formControl}>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} rows={rows} cols={columns} placeholder={placeholder} />
        </div>
    );
}

export default TextArea