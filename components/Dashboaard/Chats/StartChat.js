import styles from './StartChat.module.css';
import { useContacts } from '../../../Context/ContactsProvider'
import { useConversations } from '../../../Context/ConversationsProvider';
import { useState } from 'react';


const StartChat = ({setCancel}) => {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const {contacts} = useContacts()
    const { createConversation } = useConversations()

    const handleSubmit = async (e) => {
            e.preventDefault()
            await createConversation(selectedContactIds);
            await setCancel(true);
            setCancel(false)
    }

    const cancelHandler = async() => {
        await setCancel(true);
        setCancel(false)
    }

    const handleCheckBoxChange = (contactId) => {
        setSelectedContactIds(prevSelectedContactIds => {
            if(prevSelectedContactIds.includes(contactId)){
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })          } else{
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    return (
        <section className={styles.container}>
            <h1>Start Chat With</h1>
            <form onSubmit={handleSubmit}>
                {
                    contacts.map(contact => (
                            <div className={styles.select} key={contact.token}>
                                <div>{contact.name}</div>
                                <input className={styles.check} type="checkbox" 
                                value={selectedContactIds.includes(contact.token)} 
                                onChange={() => handleCheckBoxChange(contact.token)}
                                />
                                
                            </div>
                    ))
                }
                <button>Proceed</button> 
            </form>
            <button onClick={cancelHandler} className={styles.cancel}>Cancel</button>
        </section>
    )
}

export default StartChat
