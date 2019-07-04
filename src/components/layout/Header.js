import React from 'react'; 
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>My Todo List</h1>
            <div style={linkContainerStyle}>
                <Link style={linkStyle} to="/">Home</Link> | 
                <Link style={linkStyle} to="/about">About</Link>
            </div>
            
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#32CD32', 
    textAlign: 'center', 
    color: '#fff', 
    height: '80px',
    padding: '15px',
    marginTop: '-20px'
}

const linkContainerStyle = {
    marginTop: '35px',
}

const linkStyle = {
    color: '#333', 
    padding: '5px',
    textDecoration: 'none'
}


export default Header;