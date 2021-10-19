import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import googleIcon from '../../assets/images/google-logo.png';
import LoginImg from '../../assets/images/login-img.png';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const {email, password, fullName} = data;
        handleCreateUser(email, password, fullName)
    };

    const {handleCreateUser} = useAuth();
    const {handleGoogleSignIn, user} = useFirebase();
    return (
        <div className="flex items-center w-11/12 mx-auto">
            <div className="w-2/5 form-design text-left">
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-medium login-header">SIgn Up</h2>
                <p>Already have an account? <NavLink className="text-blue-900" to="/login">Sign In</NavLink></p>

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <div className="border border-1-blue p-1">
                            <i className="fas fa-envelope-open mr-5 ml-2 text-blue-900"></i>
                            <input placeholder="Enter name" className="outline-none" type="text" {...register("fullName", { required: true})} />
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="border border-1-blue p-1">
                            <i className="fas fa-envelope-open mr-5 ml-2 text-blue-900"></i>
                            <input placeholder="Enter email" className="outline-none" type="email" {...register("email", { required: true})}  />
                        </div>
                    </div>
                    <div>
                        <div className="border border-1-blue p-1">
                            <i className="fas fa-lock mr-5 ml-2 p-1 text-blue-900"></i>
                            <input className="outline-none" placeholder="Enter password" type="password" {...register("password", { required: true})} />
                        </div>
                    </div>
                    <input type="submit" value="Sign Up" className="block w-full font-medium py-1 my-2 px-12 bg-blue-900 text-white"/>
                </form>
                <p className="text-center">--------- or ---------</p>
                    <div>
                        <div className="flex items-center justify-center border border-1-blue p-1 text-center cursor-pointer" onClick={handleGoogleSignIn}>
                        <img className="w-5 h-5 text-right" src={googleIcon} alt="" /> 
                        <p className=" text-left text-lg font-base ml-1.5">Sign In</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-3/5">
                <div className="w-3/5 mx-auto">
                    <img src={LoginImg} alt="" />
                </div>
            </div>
            {/* <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter name" type="text" {...register("fullName", { required: true})} />
                <input placeholder="Enter email" type="email" {...register("email", { required: true})}  />
                <input placeholder="Enter password" type="password" {...register("password", { required: true})} />
                <input type="submit" />
            </form>
            <p className="text-center">--------- or ---------</p>
            <div>
                <div className="flex items-center justify-center border border-1-blue p-1 text-center cursor-pointer" onClick={handleGoogleSignIn}>
                    <img className="w-5 h-5 text-right" src={googleIcon} alt="" /> 
                    <p className=" text-left text-lg font-base ml-1.5">Sign In</p>
                </div>
            </div> */}
        </div>
    );
};

export default Register;