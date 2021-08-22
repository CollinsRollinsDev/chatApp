import CallLists from './Calls/CallLists';
import ChatList from './Chats/ChatList';
import Contacts from './Contacts/Contacts';
import styles from './Dashboard.module.css';
import Sidebar from './Sidebar/Sidebar';
import Account from  './Account/Account';
import { useSelector, useDispatch } from 'react-redux';
import { useConversations } from '../../Context/ConversationsProvider';
import OpenChats from './Chats/ChatArea/OpenChats';

const Dashboard = ({ id }) => {
       const menu = useSelector(state => state.menu.sideMenu);
    // console.log(`testing redux is : ${menu}`)
    const { selectedConversation } = useConversations()
    return (
        <>
            <section className={styles.container}>
            <Sidebar id={id} />
            {selectedConversation && <OpenChats />}
            {/* <OpenChats /> */}
            {/* <ChatList /> */}
            {/* <CallLists /> */}
            {/* <Contacts /> */}
            {/* <Account /> */}
            {
                menu == "chat" ? <ChatList /> : menu == "call" ? <CallLists /> : menu == "contact" ? <Contacts /> : menu == "account" ? <Account id={id} /> : <ChatList />
            }
            </section>
        </>
    )
}

export default Dashboard
