import React from 'react';
import Contact from './Contact';
import cloneDeep from 'lodash';
import { Consumer } from '../../Context/context';

class ContactList extends React.Component {
    
    constructor() {
        super();
        const contactList =  [];
        const masterContactList = cloneDeep(contactList);
        debugger;
        this.state = {
            contactList : contactList,
            masterContactList: masterContactList
        }
    }
    
    render() {
        const deleteContact = (contact) => {
            const contactList = this.state.contactList.filter((item) => {
                return (item.name !== contact.name && item.age !== contact.age);
            })
            this.setState({contactList: contactList});
        }

        const onSearch = (event) => {
            const contactList = this.state.masterContactList.filter((item) => {
                return item.name.indexOf(event.target.value) > -1;
            })
            this.setState({contactList: contactList});
        }
        return (
            <Consumer>
                {value => {
                    return (
                    <div>
                        <h4 className="">Contact List</h4>
                        <div className="form-group m-sm-2">
                            <input type="text" className="form-control p-sm-1" placeholder="search..." id="search" onChange={onSearch}/>
                        </div>
                        <ul className="list-group m-sm-2">
                            {value.contactList.map((contact, index) => {
                                return <li key={index.toString()} className="list-group-item">
                                    <Contact contact={contact} deleteContact={deleteContact}></Contact>
                                </li>
                            })}
                        </ul>
                    </div>
                    )
                }}
            </Consumer>
        )
        
    }
}

export default ContactList;