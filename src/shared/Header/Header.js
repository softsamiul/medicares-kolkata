import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, logOut} = useFirebase();
    console.log(user);
    
    return (
        <div>
            <Navbar>
              <Container>
                <Navbar.Brand as = {Link} to="home">MediCares</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as = {Link} to="/home">Home</Nav.Link>
                <Nav.Link as = {Link} to="/services">Services</Nav.Link>
                <Nav.Link as = {Link} to="/experts">Experts</Nav.Link>
                <Nav.Link as = {Link} to="/register">Register</Nav.Link>
                <Nav.Link as = {Link} to="/about">About</Nav.Link>
                <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
                {user.email ? <button onClick={logOut}>Logout</button> :<Nav.Link as = {Link} to="/contact">Login or Register</Nav.Link>}
                  <Navbar.Text>
                    Welcome: <a href="#login">{ user.email ? user.displayName : "Guest"}</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;