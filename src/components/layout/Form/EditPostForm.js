import styles from './EditPostForm.module.css'

import Input from './Input'
import TextArea from './TextArea'
import Hidden from './Hidden'
import SubmitButton from './SubmitButton'

import { useState } from 'react'
import moment from 'moment'

function EditPostForm({ handleSubmit, btnTitle, postData }) {
    const [postContent, setPostContent] = useState(postData || {});

    var datePost = moment();
    var initialDatePost = datePost.format('DD/MM/YYYY');

    postContent.date = postContent.date ? postContent.date : initialDatePost;

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(postContent);
    }

    function handleChange(e) {
        setPostContent({ ...postContent, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={submit} className={styles.containerNewPostForm}>
            <Input type="text" text="Digite o título da postagem" name="title" placeholder="Título da Postagem" handleOnChange={handleChange} value={postContent.title ? postContent.title : ''}/>
            <TextArea name="body" id="body" label="Digite o texto da postagem" rows="15" placeholder="Digite aqui o texto da postagem..." handleOnChange={handleChange} value={postContent.body ? postContent.body : ''}/>
            <Hidden id="date" name="date" handleOnChange={handleChange} value={postContent.date ? postContent.date : ''}/>
            <SubmitButton text={btnTitle} />
        </form>
    );
}

export default EditPostForm