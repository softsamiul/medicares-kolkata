import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import defaultAvatar from '../../assets/images/avatar-default.png';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="bg-blue-900 text-white sticky">
            <Navbar className="w-11/12 mx-auto text-white  " collapseOnSelect expand="lg">
                <Navbar.Brand as = {Link} className="text-white font-extrabold text-2xl leading-3" to="home"><i className="fas fa-clinic-medical"></i> MediCares <br/><sub className="font-extralight -ml-9">Kolkata</sub></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as = {Link} className="text-white nav-item" to="/home">Home</Nav.Link>
                <Nav.Link as = {Link} className="text-white nav-item" to="/services">Services</Nav.Link>
                <Nav.Link as = {Link} className="text-white nav-item" to="/experts">Experts</Nav.Link>
                <Nav.Link as = {Link} className="text-white nav-item" to="/about">About</Nav.Link>
                <Nav.Link as = {Link} className="text-white nav-item" to="/contact">Contact</Nav.Link>

                {user?.email || user.displayName ? <Link to="/"> <button className="mr-4 py-2 px-2 logout nav-item" onClick={logOut}>Logout</button> </Link> : <Nav.Link as = {Link} to="/register" className="nav-item text-white py-2 mr-4">Login or Register</Nav.Link>}
                  <Navbar.Text className="text-white mr-4 nav-item">
                        <NavLink to={user?.email || user.displayName ? '/profile' : '/login'} className="text-white px-2 capitalize">
                          
                            {/* { user.displayName ? user.displayName  : "Guest user"} */}
                            {user.email ?  user.displayName ? user.displayName : user.email.substring(0, user.email.lastIndexOf("@")) : "Guest user"}

                        </NavLink>
                  </Navbar.Text>
                  <Navbar.Text className="text-white">
                    <NavLink to={user?.email || user.displayName ? '/profile' : '/login'}>
                    <img className="w-14 h-14 rounded-circle user-profile-pic" src={user?.photoURL ? user.photoURL : defaultAvatar} alt="" />
                    </NavLink>
                  </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;