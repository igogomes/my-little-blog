import styles from './TextArea.module.css'

function TextArea({ name, label, handleOnChange, placeholder, rows, columns, value }) {
    return(
        <div className={styles.formControl}>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} rows={rows} cols={columns} placeholder={placeholder} onChange={handleOnChange} value={value} />
        </div>
    );
}

export default TextArea