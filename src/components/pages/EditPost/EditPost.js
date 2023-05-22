import styles from './EditPost.module.css'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Message from '../../layout/Message/Message'
import PostCardsEdition from '../../layout/PostCardsEdition/PostCardsEdition'
import Loading from '../../layout/Loading/Loading'

function EditPost() {
    const [posts, setPosts] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [postMessage, setPostMessage] = useState('');

    const location = useLocation();

    let message = '';

    if(location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
            .then((data) => {
                setPosts(data);
                setRemoveLoading(true);
            })
            .catch(err => console.log(err))
        }, 3000)
    }, []);

    function removePost(id) {
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(() => {
            setPosts(posts.filter((post) => post.id !== id));
            setPostMessage('Post removido com sucesso.');
        }).catch(err => console.log(err));
    }

    return (
        <div className={styles.postsContainer}>
            <div className={styles.postsIntroduction}>
                <h1>Posts</h1>
            </div>
            {message && <Message type='success' msg={message} />}
            {!removeLoading && <Loading />}
            {removeLoading && posts.length === 0 && (
                <p>Ainda não há postagens no blog.</p>
            )}
            {postMessage && <Message type="success" msg={postMessage}/>}
            <div className={styles.postCardsEdition}>
                {posts.length > 0 && posts.map((post) => (
                    <PostCardsEdition img="https://picsum.photos/id/238/360/190" title={post.title} body={post.body} id={post.id} handleRemove={removePost} key={post.id}/>
                ))}
            </div>
        </div>
    );
}

export default EditPost