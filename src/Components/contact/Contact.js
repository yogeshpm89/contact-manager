import React from 'react';
import { Consumer } from '../../Context/context'
import axios from 'axios';
import { Link } from 'react-router-dom';
class Contact extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Yogesh',
            age: 32
        }
    }

    showAge = () => {
        this.setState({
            "showAge": !this.state.showAge
        });
    }

    onDelete = async (contact, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${contact.id}`);
        dispatch({
            type: 'DELETE_CONTACT',
            payload: contact
        })
    }
    

    render() {
        const arrowClass = !this.state.showAge ? "fa fa-angle-double-down" : "fa fa-angle-double-up" ;
        const contact = this.props.contact;
        return <Consumer>
            {value => {
                const { dispatch } = value;
                return <div>
                {contact && 
                    <div className="row text-left">
                        <div className="col-sm-10" onClick={this.showAge}>
                            <strong>
                                {contact.name}
                                &nbsp;&nbsp;
                                <span onClick={this.showAge}>
                                    <i className={arrowClass}></i>
                                </span>
                            </strong>
                            
                            { this.state.showAge ?  
                                <div className="card-body">
                                    <p>Email address: {contact.email}</p>
                                    <p>phone: {contact.phone}</p> 
                                </div>
                            : null }
                        </div>
                        
                        <div className="col-sm-1">
                            <Link to={`contact/edit/${contact.id}`}>
                                <i className="fa fa-pencil fa-2x"
                                    style={{
                                        cursor: 'pointer',
                                        color: 'black'
                                    }}></i>
                            </Link>
                            &nbsp;&nbsp;
                            <i className="fa fa-remove fa-2x" 
                            style={{
                                cursor: 'pointer',
                                color: 'red'
                            }}
                            onClick={this.onDelete.bind(this, contact, dispatch)}></i>
                        </div>
                    </div>
                }
                
    
            </div>
            }}
        </Consumer>
    }
}

export default Contact;