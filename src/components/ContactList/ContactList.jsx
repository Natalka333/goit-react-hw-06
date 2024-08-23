import { useSelector } from 'react-redux'

import Contact from '../Contact/Contact'
import css from './ContactList.module.css'



const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);

    const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={css.container}>
            <ul className={css.section}>
                {filterContacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}

            </ul>
        </div>
    )
}

export default ContactList
