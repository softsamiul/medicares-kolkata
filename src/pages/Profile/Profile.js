import React from 'react';
import defaultAvatar from '../../assets/images/avatar-default.png';
import useAuth from '../../hooks/useAuth';
import "./Profile.css";
const Profile = () => {
    const {user} = useAuth();
    return (
        <div className="w-2/4 mx-auto profile py-18 m-8">
            <div >
                <img className="w-64 h-64 rounded-circle mx-auto" src={user.email ? user.photoURL : defaultAvatar} alt="" />
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{user.displayName}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Email verification: </td>
                        <td>{user.emailVerified === true ? "Verified" : "Not yet Verified"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;