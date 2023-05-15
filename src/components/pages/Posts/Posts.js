import styles from './Posts.module.css'

import { useLocation } from 'react-router-dom'

import Container from '../../layout/Container/Container'
import Button from '../../layout/Button/Button'
import Message from '../../layout/Message/Message'

function Posts() {
    const location = useLocation();

    let message = '';

    if(location.state) {
        message = location.state.message;
    }

    return (
        <div className={styles.postsContainer}>
            <div className={styles.postsIntroduction}>
                <h1>Posts</h1>
                <Button url='/newpost' title='Criar Postagem'/>
            </div>
            {message && <Message type='success' msg={message} />}
            <Container customClass='start'>
                <p>Posts</p>
            </Container>
        </div>
    );
}

export default Posts