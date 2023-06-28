import styles from './Contact.module.css'

import ContactForm from '../../layout/Form/ContactForm' 

function Contact() {
    return (
        <section className={styles.contactContainer}>
            <div className={styles.contactIntroduction}>
                <h1>Fale comigo</h1>
                <p>Preencha o formulário abaixo ou envie um e-mail para falecomigo@mylittleblog.com.</p>
            </div>
            <div className={styles.contactMainContent}>
                <div className={styles.imageFormContact}>
                    <img src="https://picsum.photos/id/305/360/480" alt="Contact" />
                </div>
                <div className={styles.containerContactForm}>
                    <ContactForm btnTitle="Enviar" direction="/"/>
                </div>
            </div>
        </section>
    );
}

export default Contact 