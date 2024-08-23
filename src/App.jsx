// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact, deleteContact } from './redux/contactsSlice'

import './App.css'

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

// import initialContacts from './components/data/data.json'


const App = () => {
  // const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   const savedContact = localStorage.getItem('contactsKey')
  //   return savedContact ? JSON.parse(savedContact) : initialContacts;
  // })

  // const [inputValue, setInputValue] = useState("")


  // useEffect(() => {
  //   window.localStorage.setItem('contactsKey', JSON.stringify(contacts))
  // }, [contacts])

  // const handleDelete = (id) => {
  //   dispatch(deleteContact(id));
  // }




  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );

}


export default App;