import styles from './NewPost.module.css'

import { useNavigate } from 'react-router-dom'
import NewPostForm from '../../layout/Form/NewPostForm'

function NewPost() {
    const history = useNavigate();

    function createPost(post) {
        fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        }).then((resp) => resp.json())
        .then((data) => {
            history('/posts', {message : 'Postagem criada com sucesso!'});
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newPostContainer}>
            <div className={styles.newPostIntroduction}>
                <h1>Criar Nova Postagem</h1>
                <p>Preencha o formulário abaixo para cadastrar uma nova postagem:</p>
            </div>
            <div className={styles.containerNewPostForm}>
                <NewPostForm handleSubmit={createPost} btnTitle="Enviar" direction="/posts"/>
            </div>
        </div>
    );
}

export default NewPost