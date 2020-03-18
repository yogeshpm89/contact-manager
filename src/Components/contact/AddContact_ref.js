import React from 'react'

class AddContact extends React.Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.ageInput = React.createRef();
    }
    onSubmit = (event) => {
        event.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            age: this.ageInput.current.value
        }
        console.log(contact)
    }

    static defaultProps = {
        name: 'Test',
        age: '12'
    }

    render() {
        const { name, age } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                defaultValue={name}
                                ref={this.nameInput}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number"
                                name="age"
                                className="form-control form-control-lg"
                                placeholder="Enter Age..."
                                defaultValue={age}
                                ref={this.ageInput}
                            ></input>
                        </div>
                        <input className="btn btn-dark btn-block" type="submit" value="Add Contact"></input>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddContact;