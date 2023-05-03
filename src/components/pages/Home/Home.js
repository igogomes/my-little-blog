import { Link } from 'react-router-dom';
import PostCards from '../../layout/PostCards/PostCards';
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.homeContainer}>
            <div className={styles.homeIntroduction}>
                <h1>Olá! Seja bem-vindo(a) ao meu blog!</h1>
                <p>Confira abaixo minhas últimas publicações... =)</p>
            </div>
            <div className={styles.postCards}>
                <PostCards img="https://picsum.photos/id/237/360/190" title="Donec placerat euismod ornare" buttonTitle="Leia mais"/>
                <PostCards img="https://picsum.photos/id/238/360/190" title="Maecenas condimentum vel lacus" buttonTitle="Leia mais"/>
                <PostCards img="https://picsum.photos/id/250/360/190" title="Vestibulum feugiat id diam" buttonTitle="Leia mais"/>
                <PostCards img="https://picsum.photos/id/265/360/190" title="Mauris ut tortor eu neque" buttonTitle="Leia mais"/>
                <PostCards img="https://picsum.photos/id/350/360/190" title="Quisque malesuada commodo" buttonTitle="Leia mais"/>
                <PostCards img="https://picsum.photos/id/485/360/190" title="Praesent eu justo vel purus" buttonTitle="Leia mais"/>
            </div>
            <div className={styles.ButtonPostsHome}><Link to="/posts">Confira mais posts</Link></div>
        </section>
    );
}

export default Home