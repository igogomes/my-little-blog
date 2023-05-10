import styles from './NewPostForm.module.css'

import Input from './Input'
import TextArea from './TextArea'
import Hidden from './Hidden'
import SubmitButton from './SubmitButton'

import { useEffect, useState } from 'react'

function NewPostForm({ handleSubmit, btnTitle, direction, postData }) {
    const [post, setPost] = useState([postData || {}]);

    useEffect(() => {
        fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPost(data)
        })
        .catch(err => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(post);
    }

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={submit} className={styles.containerNewPostForm}>
            <Input type="text" text="Título" name="title" placeholder="Título da Postagem" handleOnChange={handleChange} value={post.title ? post.title : ''}/>
            <TextArea name="body" id="body" rows="5" placeholder="Digite aqui o texto da postagem..." handleOnChange={handleChange} value={post.body ? post.body : ''}/>
            <Hidden id="date" name="date" handleOnChange={handleChange} value={post.date ? post.date : ''}/>
            <SubmitButton text={btnTitle} to={direction} />
        </form>
    );
}

export default NewPostForm