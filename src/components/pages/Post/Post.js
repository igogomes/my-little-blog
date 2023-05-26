import styles from './Post.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../../layout/Loading/Loading'

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
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
            .catch((err => console.log(err)))
        }, 3000)
    }, [id]);

    return (
        <>
            {!removeLoading && <Loading />}
            {removeLoading && post.length !== 0 && (
                <div className={styles.postContainer}>
                    <div className={styles.postIntroduction}>
                        <h1>{post.title}</h1>
                    </div>
                    <img src="https://picsum.photos/id/238/720/380" alt={post.title}/>
                    <p>{post.body}</p>
                </div>
            )}
        </>
    );
}

export default Post