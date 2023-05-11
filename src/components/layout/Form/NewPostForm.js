import styles from './NewPostForm.module.css'

import Input from './Input'
import TextArea from './TextArea'
import Hidden from './Hidden'
import SubmitButton from './SubmitButton'

import { useState } from 'react'
import moment from 'moment'

function NewPostForm({ handleSubmit, btnTitle, direction, postData }) {
    const [post, setPost] = useState([postData || {}]);

    var datePost = moment();
    var initialDatePost = datePost.format('DD/MM/YYYY');

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(post);
    }

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={submit} className={styles.containerNewPostForm}>
            <Input type="text" text="Digite o título da postagem" name="title" placeholder="Título da Postagem" handleOnChange={handleChange} value={post.title ? post.title : ''}/>
            <TextArea name="body" id="body" label="Digite o texto da postagem" rows="5" placeholder="Digite aqui o texto da postagem..." handleOnChange={handleChange} value={post.body ? post.body : ''}/>
            <Hidden id="date" name="date" handleOnChange={handleChange} value={post.date ? post.date : initialDatePost}/>
            <SubmitButton text={btnTitle} to={direction} />
        </form>
    );
}

export default NewPostForm