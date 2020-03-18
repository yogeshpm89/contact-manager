import React from 'react'
import {Consumer} from '../../Context/context';
import TextInputGroup from '../forms/TextInputGroup';
import axios from 'axios';

class AddContact extends React.Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
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

        const newContact = { name, email, phone };

        const respose = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({
            type: 'ADD_CONTACT',
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
                            <div className="card-header">Add Contact</div>
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
                                    <input className="btn btn-dark btn-block" type="submit" value="Add Contact"></input>
                                </form>
                            </div>

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;