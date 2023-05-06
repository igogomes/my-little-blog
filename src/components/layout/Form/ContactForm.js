import styles from './ContactForm.module.css'
import Input from './Input'
import Select from './Select'
import SubmitButton from './SubmitButton'
import TextArea from './TextArea';

function Form({ btnTitle, direction }) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Digite seu nome" name="name" placeholder="Digite seu nome"/>
            <Input type="email" text="Digite seu e-mail" name="email" placeholder="Digite seu email"/>
            <Select name="subject" text="Selecione um assunto"/> 
            <TextArea name="message" id="message" rows="5" placeholder="Digite sua mensagem aqui..."/>
            <SubmitButton text={btnTitle} to={direction} />
        </form>
    );
}

export default Form 