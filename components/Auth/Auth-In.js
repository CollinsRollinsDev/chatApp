import styles from './Auth-In.module.css';
import { useState, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid'


const AuthIn = ({onTokenSubmit}) => {

const idRef = useRef();

const handleLoginClick = (e) => {
    e.preventDefault(e);
    onTokenSubmit(idRef.current.value)
}

const handleCreateClick = (e) => {
    e.preventDefault(e);
    onTokenSubmit(uuidV4())
}

    return (
        <>
                <section className={styles.container}>
                        <form>
                            <input type="text" placeholder="Enter Auth Token" ref={idRef} />
                            <div className={styles.btnDiv}>
                            <button onClick={handleLoginClick} className={styles.login}>Login To Chat</button>
                            <button onClick={handleCreateClick}  className={styles.create}>Create Token</button>
                            </div> 
                        </form>
                </section>
        </>
    )
}

export default AuthIn
