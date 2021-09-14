import React,{ useState } from "react"
import './App.css';
import Contacts from "./component/contacts.js"
import ContactForm from "./component/ContactForm";

function App() {

const [contacts,setContact] = useState([])

function addContact(contact) {
  setContact([{...contacts},contact])
}




  return (
    <div className="App">
    <Contacts addContact={addContact}/>
    <ContactForm data={contacts}/>
    </div>
  );
}

export default App;
