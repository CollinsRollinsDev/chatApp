import React, {useContext, useState} from "react"

const ContactsContext = React.createContext()

export const useContacts = () => {
    return useContext(ContactsContext)
}

export const ContactsProvider  = ({children}) => {
    const [contacts, setContacts] = useState([])

    const createContact = (token, name) => {
        setContacts(prevContacts => {
            return [...prevContacts, {token, name}]
        })
    }

    return (
       <ContactsContext.Provider value={{contacts, createContact}}>
           {children}
       </ContactsContext.Provider>
    )
}

