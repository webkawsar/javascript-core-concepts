import React, { useState } from 'react'

const Contacts = () => {
    const [contacts, setContacts] = useState();

  return (
    <div>
        contacts.map(contact => {
            return <li>Contact</li>
        })
    </div>
  )
}

export default Contacts