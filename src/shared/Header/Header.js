import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import defaultAvatar from '../../assets/images/avatar-default.png';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, logOut} = useFirebase();
    console.log(user);
    
    return (
        <div className="bg-blue-900 text-white sticky">
            <Navbar className="w-11/12 mx-auto text-white ">
                <Navbar.Brand as = {Link} className="text-white font-extrabold text-2xl leading-3" to="home"><i className="fas fa-clinic-medical"></i> MediCares <br/><sub className="font-extralight -ml-9">Kolkata</sub></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as = {Link} className="text-white" to="/home">Home</Nav.Link>
                <Nav.Link as = {Link} className="text-white" to="/services">Services</Nav.Link>
                <Nav.Link as = {Link} className="text-white" to="/experts">Experts</Nav.Link>
                <Nav.Link as = {Link} className="text-white" to="/about">About</Nav.Link>
                <Nav.Link as = {Link} className="text-white" to="/contact">Contact</Nav.Link>
                {user?.email ? <button className="mr-4" onClick={logOut}>Logout</button> :<Nav.Link as = {Link} to="/login" className="text-white mr-4">Login or Register</Nav.Link>}
                  <Navbar.Text className="text-white mr-4">
                    <NavLink to={user?.email ? '/profile' : '/login'} className="text-white">{ user?.email ? user.displayName : "Guest user"}</NavLink>
                  </Navbar.Text>
                  <Navbar.Text className="text-white">
                    <img className="w-14 h-14 rounded-circle" src={user?.photoURL ? user.photoURL : defaultAvatar} alt="" />
                  </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;