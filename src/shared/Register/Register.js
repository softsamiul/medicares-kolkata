import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
const Register = () => {
    const { register, handleSubmit } = useForm();
    // const onSubmit = data => setEmailUser(data);
    const onSubmit = data => {
        const {email, password, fullName} = data;
        handleCreateUser(email, password, fullName)
    };

    const {handleCreateUser} = useAuth();
    const {handleGoogleSignIn, user} = useFirebase();
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter name" type="text" {...register("fullName", { required: true})} />
                <input placeholder="Enter email" type="email" {...register("email", { required: true})}  />
                <input placeholder="Enter password" type="password" {...register("password", { required: true})} />
                <input type="submit" />
            </form>
            <div>------------------------------</div>
            <p>Already Registered? <NavLink to="/login">Login</NavLink></p>
            <div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;