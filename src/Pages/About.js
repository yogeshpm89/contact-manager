import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className="card mb-3">
                <h1 className="display-4">About page</h1>
                <p>Simple App to manage contacts</p>
                <p className="text-secondary">v1.0.0</p>
                <p>{this.props.match.params.id}</p>
            </div>
        )
    }
}

export default About;