import styles from "./Chats.module.css";
import Image from "next/image";
import { useState, useRef, useCallback} from 'react'
import { useConversations } from "../../../../Context/ConversationsProvider";
import { updatingCloseChat } from "../../../../redux-store/actions/closeChatAction";
import { updatingOpenChat } from "../../../../redux-store/actions/openChatAction";
import { useSelector, useDispatch } from 'react-redux'

// const display = {
//   zIndex: `${openChat ? "1" : "0"}`
// }

const OpenChats = () => {
  const openChat = useSelector(state => state.openChatReducer.openChat);
  const closeChat = useSelector(state => state.closeChatReducer.closeChat);
 const dispatch = useDispatch()

 const [closingChat, setClosingChat] = useState(true)

 const handleNavigation = async () => {
  // await !closingChat ? setClosingChat(true) : setCloseChat(false);
   dispatch(updatingOpenChat(false));

 }

 const displaying = {
  // zIndex: `${!openChat ? "1" : "0"}`
  display: `${openChat ? "flex" : "none"}`
  // zIndex: `0`
}

  const [text, setText] = useState('');
  const [name, setName] = useState("")
  const { sendMessage, selectedConversation } = useConversations()
  console.log(selectedConversation.recipients[0].name);
  // const { lastMessageRef } = useRef();
  const setRef = useCallback(node => {
    if(node){
    node.scrollIntoView({ smooth: true})
    }
  }, [])

  const handleSubmit = async (e) => {
        e.preventDefault()
       await sendMessage(selectedConversation.recipients.map(r => r.id), text);
        console.log(selectedConversation)
        setText("");
  }

  return (
    <>
    {/* For Desktop */}
      <section className={styles.container}>
        <section className={styles.header}>
          <div className={styles.dpDiv}>
            <div>
            <Image 
                  src="/defaultImg1.png"
                  layout="fill"
                  alt="Default Profile picture"
                
                />
            </div>
          </div>
          <div className={styles.nameDiv}>
            <div className={styles.username}>{selectedConversation && selectedConversation.recipients[0].name}</div>
            <div className={styles.status}>online</div>
          </div>
          <div className={styles.iconDiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M20.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.083 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.522 6.795c-.008.004-1.989.978-2.11 1.033zm-9.438-2.264c-1.476 1.072-3.506 1.17-4.124.106-.47-.809-.311-1.728-.127-2.793.201-1.161.429-2.478-.295-3.71-1.219-2.076-3.897-1.983-5.906-.67l.956 1.463c.829-.542 1.784-.775 2.493-.609 1.653.388 1.151 2.526 1.03 3.229-.212 1.223-.45 2.61.337 3.968 1.243 2.143 4.579 2.076 6.836.316-.412-.407-.811-.843-1.2-1.3z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
            </svg>
          </div>
        </section>

        <section className={styles.conversations}>
        {
        selectedConversation.messages.map((message, index) => {
          // setName(message.senderName)
          const lastMessage = selectedConversation.messages.length - 1 === index
            return (
            <section  key={index} className={styles.overall} ref ={lastMessage ? setRef : null}  >
                   <div className={message.fromMe ? styles.me : styles.sender} >
                        <div className={message.fromMe ? styles.meMsg : styles.senderMsg}>{message.text}</div>
                        <div className={message.fromMe ? styles.meRecipient : styles.senderRecipient}>{message.fromMe ? "You" : message.senderName}</div>
                  </div>
              </section>
            )
          })
        }
        </section>
        <form onSubmit={handleSubmit}>
          <textarea  placeholder="Type Message" 
          value={text}
          onChange={e => setText(e.target.value)} 
          >
          </textarea>
          <button type="submit">Send</button>
        </form>
      </section>


{/* For Mobile */}

<section style={displaying} className={styles.mobileContainer}>
        <section className={styles.header}>
          <div className={styles.dpDiv}>
            <div>
                <Image 
                  src="/defaultImg1.png"
                  layout="fill"
                  alt="Default Profile picture"
                
                />
            </div>
          </div>
          <div className={styles.nameDiv}>
            <div className={styles.username}>{selectedConversation && selectedConversation.recipients[0].name}</div>
            <div className={styles.status}>online</div>
          </div>
          <div className={styles.iconDiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M20.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.083 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.522 6.795c-.008.004-1.989.978-2.11 1.033zm-9.438-2.264c-1.476 1.072-3.506 1.17-4.124.106-.47-.809-.311-1.728-.127-2.793.201-1.161.429-2.478-.295-3.71-1.219-2.076-3.897-1.983-5.906-.67l.956 1.463c.829-.542 1.784-.775 2.493-.609 1.653.388 1.151 2.526 1.03 3.229-.212 1.223-.45 2.61.337 3.968 1.243 2.143 4.579 2.076 6.836.316-.412-.407-.811-.843-1.2-1.3z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
            </svg>
          </div>
        </section>

        <section className={styles.conversations}>
        {
        selectedConversation.messages.map((message, index) => {
          // setName(message.senderName)
          const lastMessage = selectedConversation.messages.length - 1 === index
            return (
            <section  key={index} className={styles.overall} ref ={lastMessage ? setRef : null}  >
                   <div className={message.fromMe ? styles.me : styles.sender} >
                        <div className={message.fromMe ? styles.meMsg : styles.senderMsg}>{message.text}</div>
                        <div className={message.fromMe ? styles.meRecipient : styles.senderRecipient}>{message.fromMe ? "You" : message.senderName}</div>
                  </div>
              </section>
            )
          })
        }
        </section>
        <form onSubmit={handleSubmit}>
          <div onClick={handleNavigation} className={styles.backBtn}>
            Back
          </div>
          <textarea  placeholder="Type Message" 
          value={text}
          onChange={e => setText(e.target.value)} 
          >
          </textarea>
          <button type="submit">Send</button>
        </form>
      </section>

    </>
  );
};

export default OpenChats;

