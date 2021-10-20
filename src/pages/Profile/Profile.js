import React from 'react';
import defaultAvatar from '../../assets/images/avatar-default.png';
import useAuth from '../../hooks/useAuth';
import "./Profile.css";
const Profile = () => {
    const {user} = useAuth();
    return (
        <div className="md:w-2/4  w-10/12 mx-auto profile py-18 m-8">
            <div >
                <img className="md:w-64 md:h-64 w-30 h-30 rounded-circle mx-auto" src={user.email || user.DisplayName ? user.photoURL : defaultAvatar} alt="" />
            </div>
            <table className="mt-8 w-4/5 mx-auto text-left">
                <tbody>
                    <tr className=" border-b-2 border-gray">
                        <td>Name:</td>
                        <td>{user.displayName}</td>
                    </tr>
                    <tr className=" border-b-2 border-gray">
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr className=" border-b-2 border-gray">
                        <td>Email verification: </td>
                        <td>{user.emailVerified === true ? "Verified" : "Not yet Verified"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;