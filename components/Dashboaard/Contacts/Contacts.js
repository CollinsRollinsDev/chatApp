import styles from "./Contacts.module.css";
import { ContactDetails } from "./ContactDetails";
import AddNewFriend from "../Contacts/AddNewFriend";
import { useState, useEffect } from "react";
import { useContacts } from "../../../Context/ContactsProvider";


const Contacts = () => {
  const [isAddFriend, setIsAddFriend] = useState(false)
  const [cancel, setCancel] = useState(false);

  const { contacts } = useContacts()

  const template = contacts.map((contact) => {
    return (
      <div key={contact.token} className={styles.msgArea}>
        <div className={styles.dp}>
          {/* <Image src={contact.img} layout="fill" /> */}
        </div>
        <div className={styles.details}>
          <div className={styles.username}>{contact.name}</div>
          {/* to be replaced with call history type below */}
          <div className={styles.message}>
         {contact.token}
          </div>
        </div>

        {/* Icon for phone tab */}
      </div>
    );
  });


  const handleNewFriend = () => {
    isAddFriend ? setIsAddFriend(false) : setIsAddFriend(true);
  }
  
  useEffect(() => {
    cancel ? setIsAddFriend(false) : null
    // !isAddFriend ? setCancel(false) : null
  }, [cancel])

  return (
    <>
    <section className={styles.container}>
      <section className={styles.contactHead}>
        <div className={styles.head}>
          <h2>Contacts</h2>
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
        {/* <div className={styles.subHead}>
          <input type="search" name="" id="" className={styles.search1} />
          <input type="search" name="" id="" className={styles.search2} />
        </div> */}
      </section>

      {/* contact area */}
      {template}
      <div onClick={handleNewFriend} className={styles.createConversation}>
          Add Contact
        </div>
    </section>
    {
        isAddFriend ? <AddNewFriend setCancel={setCancel} /> : null
      }
    </>
  );
};

export default Contacts;
