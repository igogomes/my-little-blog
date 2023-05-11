function Hidden({ id, name, value, handleOnChange }) {
    return (
        <input type='hidden' id={id} name={name} value={value} onChange={handleOnChange}/>
    );
}

export default Hidden