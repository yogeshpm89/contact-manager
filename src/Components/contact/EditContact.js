import React from 'react'
import {Consumer} from '../../Context/context';
import TextInputGroup from '../forms/TextInputGroup';
import axios from 'axios';

class EditContact extends React.Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        const response = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = (await response).data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = async (dispatch, event) => {
        event.preventDefault();
        const { name, email, phone } = this.state;
        let isValid = true;

        if (!name) {
            this.setState({errors: {name: 'Name is required'}});
            isValid = false;
        }
        if (!email) {
            this.setState({errors: {age: 'Email is required'}});
            isValid = false;
        }

        if (!phone) {
            this.setState({errors: {age: 'Phone is required'}});
            isValid = false;
        }

        if (!isValid) return;

        const updatedContact = { name, email, phone };
        const {id} = this.props.match.params;
        const respose = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact);
        dispatch({
            type: 'UPDATE_CONTACT',
            payload: respose.data
        });
        this.setState({name: '',age: '', errors: {}});
        this.props.history.push("/");
    }

    render() {
        const { name, email, phone, errors} = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        name="name" label="Name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        name="email" label="Email Address"
                                        type="email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                     <TextInputGroup 
                                        name="phone" label="Phone"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input className="btn btn-dark btn-block" type="submit" value="Update Contact"></input>
                                </form>
                            </div>

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditContact;