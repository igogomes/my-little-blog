function Hidden({ id, name, value }) {
    return (
        <input type='hidden' id={id} name={name} value={value}/>
    );
}

export default Hidden