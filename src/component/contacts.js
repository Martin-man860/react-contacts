import React, {useState} from "react"
import "../App.css"

function Contacts (props) {
    const [name,setName] = useState("")
    const [telephone,setTelephone] = useState("")
    const [location,setLocation] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        let contact = {
            name: name,
            telephone: telephone,
            location: location,
        }

        props.addContact(contact);
        setName("")
        setTelephone("")
        setLocation("")

        
    }

    return (
        <form onSubmit = {(e) => handleSubmit(e)}>
            <h2>Codetrain</h2>
        <div className="box">
            <label>Full name : </label>
            <input type="text" name="full name" placeholder="Enter your fullname"  value={name} onChange={(e) => setName(e.target.value)}/>
                <br/>
            <label>Telephone :</label>    
            <input type="telephone" name="telephone" placeholder="+233"  value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
                <br/>
            <label>Location : </label>
            <input type="location" name="location" placeholder="Enter your place" value={location} onChange={(e) => setLocation(e.target.value)}/>
            <br/> 
            <label>Click here :</label>
            <input type="Submit" className="submit"/>   
        </div>

        </form>
    )
}

export default Contacts;