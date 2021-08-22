import styles from './AddNewFriend.module.css';
import { useState, useRef } from 'react';
import { useContacts } from '../../../Context/ContactsProvider';

const AddNewFriend = ({setCancel}) => {
    // const [cancel, setCancel] = useState();
    const nameRef = useRef();
    const tokenRef = useRef();
    const { createContact } = useContacts()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createContact(tokenRef.current.value, nameRef.current.value);
        await setCancel(true);
        setCancel(false)
    }

    const cancelHandler = async() => {
        await setCancel(true);
        setCancel(false)
    }

    return (
        <section className={styles.container}>
            <h1>Add Your Friend</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" ref={nameRef} />
                <input type="text" placeholder="Token" ref={tokenRef}   />
                <button>Add This Person</button> 
            </form>
            <button onClick={cancelHandler} className={styles.cancel}>Cancel</button>
        </section>
    )
}

export default AddNewFriend
