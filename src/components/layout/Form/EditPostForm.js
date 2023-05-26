import styles from './EditPostForm.module.css'

import Input from './Input'
import TextArea from './TextArea'
import SubmitButton from './SubmitButton'

import { useState } from 'react'

function EditPostForm({ handleSubmit, btnTitle, postData }) {
    const [postContent, setPostContent] = useState(postData || {});

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(postContent);
    }

    function handleChange(e) {
        setPostContent({ ...postContent, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={submit} className={styles.containerEditPostForm}>
            <Input type="text" text="Digite o título da postagem" name="title" placeholder="Título da Postagem" handleOnChange={handleChange} value={postContent.title}/>
            <TextArea name="body" id="body" label="Digite o texto da postagem" rows="15" placeholder="Digite aqui o texto da postagem..." handleOnChange={handleChange} value={postContent.body}/>
            <SubmitButton text={btnTitle} />
        </form>
    );
}

export default EditPostForm