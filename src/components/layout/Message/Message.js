import styles from './Message.module.css'

import { useEffect, useState } from 'react';
import { FaRegThumbsUp, FaExclamation, FaRegFlag} from 'react-icons/fa'

function Message({ type, msg }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(!msg) {
            setVisible(false);
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000)

        return () => clearTimeout(timer);
    }, [msg]);

    function getIcon(type) {
        if(type === 'success') {
            return <FaRegThumbsUp/>
        } else if(type === 'error') {
            return <FaExclamation/>
        } else if(type === 'warning') {
            return <FaRegFlag/>
        }
    }

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{getIcon(type)} {msg}</div>
            )}
        </>
    );
}

export default Message