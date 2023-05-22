import { Link } from 'react-router-dom';
import PostCards from '../../layout/PostCards/PostCards';
import styles from './Home.module.css' 
import { useEffect, useState } from 'react';
import Loading from '../../layout/Loading/Loading';

function Home() {
    const [posts, setPosts] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => resp.json())
            .then((data) => {
                setPosts(data);
                setRemoveLoading(true);
            })
            .catch(err => console.log(err))
        }, 3000)
    }, []);

    return (
        <section className={styles.homeContainer}>
            <div className={styles.homeIntroduction}>
                <h1>Olá! Seja bem-vindo(a) ao meu blog!</h1>
                <p>Confira abaixo minhas últimas publicações... =)</p>
            </div>
            {!removeLoading && <Loading />}
            {removeLoading && posts.length === 0 && (
                <p>Ainda não há postagens no blog.</p>
            )}
            <div className={styles.postCards}>
                {posts.length > 0 && posts.slice(0, 6).map((post) => (
                    <PostCards img="https://picsum.photos/id/238/360/190" id={post.id} title={post.title} body={post.body} key={post.id} buttonTitle="Leia mais"/>
                ))}
            </div>
            {removeLoading && posts.length !== 0 && (<div className={styles.ButtonPostsHome}><Link to="/posts">Confira mais posts</Link></div>)}
        </section>
    );
}

export default Home