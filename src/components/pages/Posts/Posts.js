import styles from './Posts.module.css'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Message from '../../layout/Message/Message'
import PostCards from '../../layout/PostCards/PostCards'
import Loading from '../../layout/Loading/Loading'

function Posts() {
    const [posts, setPosts] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

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
            <div className={styles.postCards}>
                {posts.length > 0 && posts.map((post) => (
                    <PostCards img="https://picsum.photos/id/238/360/190" title={post.title} body={post.body} id={post.id} key={post.id} buttonTitle="Leia mais"/>
                ))}
            </div>
        </div>
    );
}

export default Posts