import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <h1>Contact Manager Application</h1>
                    <nav className="pull-left navbar navbar-expand-sm">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link">Add</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about/" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/test/" className="nav-link">Test</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;