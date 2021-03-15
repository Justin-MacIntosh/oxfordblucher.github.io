import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='custom-nav' bg="dark" variant="dark" expand='lg'>
            <Navbar.Brand href='/'><b>Hiu Chan</b></Navbar.Brand>
            <Navbar.Text className="ml-auto"><b>hiuchanhk@gmail.com</b></Navbar.Text>
        </Navbar>
    )
}

export default Header;