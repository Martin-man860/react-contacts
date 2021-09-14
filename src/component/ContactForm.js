import React,{Component} from "react"



class ContactForm extends Component {
    render(){
        const contacts = this.props.data;

       return (
           
            contacts.map((contact,index) => {

                return(
                    <div className="container">
                      <div key={index}>
                        <h1>{contact.name}</h1>
                        <h1>{contact.telephone}</h1>
                        <h1>{contact.location}</h1>
                     </div>
                    </div>
                   );
            })
        )
    }
}

export default ContactForm;