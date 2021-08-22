import styles from "./ChatList.module.css";
import { ChatDetails } from "./ChatDetails";
import Image from 'next/image'
import Chats from "./ChatArea/OpenChats";
import { useState, useEffect } from "react";
import { useConversations } from "../../../Context/ConversationsProvider"; 
import StartChat from "./StartChat";


const ChatList = () => {
  const [isAddConversation, setIsAddConversation] = useState(false)
  const [cancel, setCancel] = useState(false);

  const { conversations, selectConversationIndex } = useConversations()

  const newTemplate = (
    conversations.map((conversation, index ) => (
      <div active={selectConversationIndex} key={index} className={styles.msgArea} onClick={() => selectConversationIndex(index)}>
      <div className={styles.dp}>
      {/* <Image src={chat.img} layout="fill" /> */}
      </div>
      <div className={styles.details}>
        <div className={styles.username}>
          {conversation.recipients.map(r => r.name).join(', ')}
          </div>
        {/* <div className={styles.message}>{chat.message}</div> */}
      </div>
      </div>
    ))
  )
  
  const handleAddConversation = () => {
    isAddConversation ? setIsAddConversation(false) : setIsAddConversation(true)
  }

  useEffect(() => {
    cancel ? setIsAddConversation(false) : null
    // !isAddFriend ? setCancel(false) : null
  }, [cancel])

  return (
    <>
      <section className={styles.container}>
        <section className={styles.chatHead}>
          <div className={styles.head}>
            <h2>Chats</h2>
            <section className={styles.options}>
              <section className={styles.notification}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
                </svg>
              </section>
              <section className={styles.more}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                </svg>
              </section>
            </section>
          </div>
          <div className={styles.subHead}>
            <input type="search" name="" id="" className={styles.search1} />
            <input type="search" name="" id="" className={styles.search2} />
          </div>
        </section>

        {/* Chat area */}


        {/* {template} */}
        {newTemplate}
        <div onClick={handleAddConversation} className={styles.createConversation}>
          Start Chat
        </div>
      </section>
      {/* <Chats /> */}
      
      {
        isAddConversation ? <StartChat setCancel={setCancel} /> : null
      }
    </>
  );
};

export default ChatList;
