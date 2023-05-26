import styles from './EditPost.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../../layout/Loading/Loading'
import Message from '../../layout/Message/Message';
import EditPostForm from '../../layout/Form/EditPostForm'

function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [message, setMessage] = useState();
    const [type, setType] = useState();
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/posts/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(resp => resp.json())
            .then((data) => {
                setPost(data);
                setRemoveLoading(true);
            })
            .catch((err) => console.log(err))
        }, 3000)
    }, [id]);

    function editPost(post) {
        fetch(`http://localhost:5000/posts/${post.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),
        })
        .then(resp => resp.json())
        .then((data) => {
            setPost(data);
            setMessage('Post atualizado com sucesso.');
            setType('success');
        })
        .catch((err) => console.log(err));
    }

    return (
        <>
            {!removeLoading && <Loading />}
            {removeLoading && post.length !== 0 && (
                <div className={styles.editPostContainer}>
                    <div className={styles.editPostIntroduction}>
                        <h1>Editar Postagem</h1>
                        <p>Preencha o formulário abaixo para editar a postagem:</p>
                    </div>
                    <div className={styles.containerEditPostForm}>
                        {message && <Message type={type} msg={message} />}
                        <EditPostForm handleSubmit={editPost} btnTitle="Concluir edição" postData={post}/>
                    </div>
                </div>
            )}
            {removeLoading && post.length === null && (
                <p>Não foi possível recuperar as informações do post.</p>
            )}
        </>
    );
}

export default EditPost