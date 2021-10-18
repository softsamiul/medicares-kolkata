import React from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const {handleGoogleSignIn, user} = useFirebase();
    return (
        <div>
            <h2>Register</h2>
            <p>{user.name}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter name" type="text" {...register("fullName", { required: true})} />
                <input placeholder="Enter email" type="email" {...register("email", { required: true})}  />
                <input placeholder="Enter password" type="password" {...register("password", { required: true})} />
                <input type="submit" />
            </form>
            <div>------------------------------</div>
            <div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;