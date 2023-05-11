import { useEffect, useState } from 'react';
import styles from './ContactForm.module.css'
import Input from './Input'
import Select from './Select'
import SubmitButton from './SubmitButton'
import TextArea from './TextArea';

function Form({ btnTitle, direction }) {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/subjects", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSubjects(data)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <form className={styles.form}>
            <Input type="text" text="Digite seu nome" name="name" placeholder="Digite seu nome"/>
            <Input type="email" text="Digite seu e-mail" name="email" placeholder="Digite seu email"/>
            <Select name="subject" text="Selecione um assunto" options={subjects}/> 
            <TextArea name="message" label="Digite sua mensagem" id="message" rows="5" placeholder="Digite sua mensagem aqui..."/>
            <SubmitButton text={btnTitle} to={direction} />
        </form>
    );
}

export default Form 